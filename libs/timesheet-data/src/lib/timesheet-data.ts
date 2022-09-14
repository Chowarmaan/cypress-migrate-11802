/**
 * Time Entry interface structure as the basics need for entering a timesheet single time entry
 */
export interface ITimeEntry {
	/**
	 * Description for the Time Entry
	 * @type {string}
	 * @memberof ITimeEntry
	 * @example 'Work on the Age Check not firing bug'
	 */
	Description: string;

	/**
	 * Date the Time Entry is for
	 * @type {Date}
	 * @memberof ITimeEntry
	 * @example '2022-05-18'
	 */
	EntryDate: Date;

	/**
	 * Hours to record for the Time Entry
	 * @type {number}
	 * @memberof ITimeEntry
	 * @example 4.25
	 */
	Hours: number;

	/**
	 * User Id for the Time Entry
	 * @type {string}
	 * @memberof ITimeEntry
	 * @example 'johnd'
	 */
	 UserId: string;

	/**
	 * Administration Code for the entry (optional).
	 * If not provided, then a Mantis Id needs to be provided.
	 * @type {number}
	 * @memberof ITimeEntry
	 * @example 3 (Time off in Lieu)
	 */
	AdminCode?: number;

	/**
	 * Mantis Id for the entry (optional).
	 * If not provided, then an Adminstration Code needs to be provided.
	 * @type {number}
	 * @memberof ITimeEntry
	 * @example 12345
	 */
	MantisId?: number;

	/**
	 * Line Number for the Time Entry (optional)
	 * This needs to be set when saving multiple entries in a single day for the same mantis id.
	 * @type {number}
	 * @memberof ITimeEntry
	 * @example 1
	 */
	LineNo?: number;
}
