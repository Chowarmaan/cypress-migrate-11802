/**
 * Interface for data storage common fields
 */
export interface IDataStorageCommonFields {
	/**
	 * The unique identifier of the item.
	 * This is typically the external known value, not a generated internal value (IE: database key).
	 * @type {string | number}
	 * @memberof IDataStorageCommonFields
	 * @example 'BY1'
	 */
	Id_?: string | number;

	/**
	 * The storage key (id, database sequence, etc.) that the record is stored under.
	 * This is different from the Id_ in that this will not be a known value, but rather a generated value.
	 */
	Key_?: string | number;

	/**
	 * The date the record was created.
	 * This is a system generated value.
	 * @type {Date}
	 * @memberof IDataStorageCommonFields
	 * @example '2022-05-15T12:45:59.000Z'
	 */
	Created_?: Date;

	/**
	 * The date the record was last updated.
	 * This is a system generated value.
	 * @type {Date}
	 * @memberof IDataStorageCommonFields
	 * @example '2022-05-15T12:45:59.000Z'
	 */
	 LastUpdated_?: Date;
}

// export type DBResponse<T> = DBInfo & T;
// then, in other files, I can list the return type as DBResponse<User> and it attaches the extra keys correctly.
export type DBResponse<T> = IDataStorageCommonFields & T;
