import { DBResponse } from './data-storage';

/**
 * This definition class is what is injected into services in the application to provide the functions.
 * Services to access data then use this function's methods to get the data instead of the TypeORM functions directly.
 * Other database engines will do the same (IE: firebase) so that services use these calls regardless of the data engine used
 * This was the data access service therefore simply gets the engine injected, so the service does not need to understand the engine functionality.
 */
export interface DataEngineBehaviour<T> {
	GetRecords(): Promise<Array<DBResponse<T>>>;
}
