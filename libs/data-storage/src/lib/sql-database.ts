/**
 * This class is used to wrap the database access code and define the common functions that are defined in the behaviour interface
 * This class should be working for the TypeORM based database engines.
 * This class works against the database, that was setup in the application
 */

import { Injectable } from '@nestjs/common';
import { DeepPartial, DeleteResult, FindConditions, Repository, UpdateResult } from 'typeorm';
import { plainToInstance } from 'class-transformer';

@Injectable()
export abstract class BaseService<T> {
	protected DataRepository_: Repository<T>;
	constructor() {}

	/**
	 * Create a new record in the data store. Note: This create should have the unique business logic field (IE: Code).
	 * @param WhereCondition - FindConditions(T) - WhereCondition to use to ensure primary business logic field does not exist in the data store
	 * @returns R - Created record in the format of R
	 * @throws Exception - if an exception is encountered during the operation or if an existing primary business logic record exists
	 */
	protected async CreateNewRecord_base_<R>(WhereCondition: FindConditions<T>, DataEntity: DeepPartial<T>): Promise<R> {
		let RClassCreator: new () => R; // Create a wrapper to create a generic class for plainToInstance

		return new Promise<R>(async (resolve, reject) => {
			try {
				const Exists$: T = await this.FindById_base_(WhereCondition);
				if (Exists$) {
					reject(new Error(`Record already exists: ${JSON.stringify(WhereCondition)}`));
				} else {
					const Record$: DeepPartial<T> = await this.DataRepository_.save(DataEntity);
					const ReturnData: R = plainToInstance(RClassCreator, Record$);
					resolve(ReturnData);
				}
			} catch (Exception) {
				reject(Exception);
			}
		});
	}

	/**
	 * Find if the single record exists in the data store using the WhereCondition provided.
	 * T = DataEntityType (IE: User)
	 * @param WhereCondition - FindConditions(T) - WhereCondition to use to find the record by providing the entity fields in T
	 * @returns T - First Record found by the WhereCondition
	 * @throws Exception - if an exception is encountered during the findOneOrFail() operation
	 */
	protected async FindById_base_(WhereCondition: FindConditions<T>): Promise<T> {
		return new Promise<T>(async (resolve, reject) => {
			try {
				const Record$: T = await this.DataRepository_.findOne(WhereCondition);
				resolve(Record$);
			} catch (Exception) {
				reject(Exception);
			}
		});
	}

	/**
	 * Get record(s) in the data store using the WhereCondition provided.
	 * R = ResponseFormatType (IE: ResponseDTO)
	 * T = DataEntityType (IE: User)
	 * @param WhereCondition - FindConditions(T) - WhereCondition to use to find the record(s) by providing the entity fields in T
	 * @returns Array(R) - Array of records found by the WhereCondition in the format of R
	 * @throws Exception - if an exception is encountered during the find() operation
	 */
	protected async GetRecords_base_<R>(WhereCondition?: FindConditions<T>): Promise<Array<R>> {
		let RClassCreator: new () => R; // Create a wrapper to create a generic class for plainToInstance

		return new Promise<Array<R>>(async (resolve, reject) => {
			try {
				const Records$: Array<T> = await this.DataRepository_.find(WhereCondition);
				resolve(Records$.map((OneRecord: T) => plainToInstance(RClassCreator, OneRecord)));
			} catch (Exception) {
				reject(Exception);
			}
		});
	}

	/**
	 * Find the single record in the data store using the WhereCondition provided.
	 * R = ResponseFormatType (IE: ResponseDTO)
	 * T = DataEntityType (IE: User)
	 * @param WhereCondition - FindConditions(T) - WhereCondition to use to find the record by providing the entity fields in T
	 * @returns R - Record found by the WhereCondition in the format of R
	 * @throws Exception - if an exception is encountered during the findOneOrFail() operation
	 */
	protected async GetRecordById_base_<R>(WhereCondition: FindConditions<T>): Promise<R> {
		let RClassCreator: new () => R;

		return new Promise<R>(async (resolve, reject) => {
			try {
				const Record$: T = await this.FindById_base_(WhereCondition);
				const ReturnData: R = plainToInstance(RClassCreator, Record$);
				resolve(ReturnData);
			} catch (Exception) {
				reject(Exception);
			}
		});
	}

	/**
	 * Delete a record in the data store using the WhereCondition provided.  Note: This delete should have the unique business logic field (IE: Code) and the database Key (IE: Key_).
	 * @param WhereCondition - FindConditions(T) - WhereCondition to use to find the record by providing the entity fields in T
	 * @returns number - Number of records deleted by the WhereCondition
	 * @throws Exception - if an exception is encountered during the delete() operation
	 */
	protected async DeleteByIdAndKey_base_(WhereCondition: FindConditions<T>): Promise<number> {
		return new Promise<number>(async (resolve, reject) => {
			try {
				const Deleted$: DeleteResult = await this.DataRepository_.delete(WhereCondition);
				if (Deleted$.affected > 0) {
					resolve(Deleted$.affected);
				} else {
					reject(new Error(`Unable to delete record: ${JSON.stringify(WhereCondition)}`));
				}
			} catch (Exception) {
				reject(Exception);
			}
		});
	}

	/**
	 * Update the existing Primary business data logic record using the WhereCondition provided.  Note: This update should have the new, unique business logic field (IE: Code) and the database Key (IE: Key_) of the existing record to be updated. Note: All the fields provided will be shallow updated (main record, not related records)
	 * @param WhereCondition - FindConditions(T) - WhereCondition to use to find the record by providing the entity fields in T
	 * @param DataEntity - T - DataEntity to update the record with which should just be the primary business logic fields
	 * @returns number - Number of records updated by the WhereCondition. This should only be 1.
	 * @throws Exception - if an exception is encountered during the delete() operation
	 */
	protected async UpdateIdUsingKey_base_(WhereCondition: FindConditions<T>, DataEntity: T): Promise<number> {
		return new Promise<number>(async (resolve, reject) => {
			try {
				const Records$: Array<T> = await this.GetRecords_base_(WhereCondition); // WhereCondition should only have the Key_
				if (Records$.length === 1) {
					// Only one record should be found
					const Updated$: UpdateResult = await this.DataRepository_.update(WhereCondition, DataEntity); // Should just be the new business logic value
					resolve(Updated$.affected);
				} else {
					reject(new Error(`Unable to update record as more than 1 record was returned: ${JSON.stringify(WhereCondition)}`));
				}
			} catch (Exception) {
				reject(Exception);
			}
		});
	}

	/**
	 * Update an existing record, or create a new record in the data store if a record does not exist. Note: This create should have the unique business logic field (IE: Code).
	 * @param WhereCondition - FindConditions(T) - WhereCondition to use to ensure primary business logic field does not exist in the data store
	 * @returns R - Created record in the format of R
	 * @throws Exception - if an exception is encountered during the operation or if an existing primary business logic record exists
	 */
	protected async UpdateExistingOrCreateNewRecord_base_<R>(WhereCondition: FindConditions<T>, DataEntity: DeepPartial<T>): Promise<R> {
		let RClassCreator: new () => R; // Create a wrapper to create a generic class for plainToInstance
		return new Promise<R>(async (resolve, reject) => {
			try {
				let RecordToCreate: DeepPartial<T>;
				const Exists$: T = await this.FindById_base_(WhereCondition);
				if (Exists$) {
					RecordToCreate = { ...Exists$, ...DataEntity };
				} else {
					RecordToCreate = DataEntity;
				}
				const Record$: DeepPartial<T> = await this.DataRepository_.save(RecordToCreate); // Should update existing, or create new
				const ReturnData: R = plainToInstance(RClassCreator, Record$);
				resolve(ReturnData);
			} catch (Exception) {
				reject(Exception);
			}
		});
	}
}
