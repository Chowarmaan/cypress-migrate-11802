import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ITimeEntry } from '@chowarmaan/timesheet-data';

@Component({
	selector: 'sweda-ts-view-time-sheet-data',
	templateUrl: './view-time-sheet-data.component.html',
	styleUrls: ['./view-time-sheet-data.component.css'],
})
export class ViewTimeSheetDataComponent implements OnInit {
	public TimeSheetEntries: Array<ITimeEntry> = new Array<ITimeEntry>();

	constructor(private HttpClient_: HttpClient) {
		this.LoadTimeSheetData_();
	}

	ngOnInit(): void {
		;
	}

	private LoadTimeSheetData_(): void {
		this.HttpClient_.get<Array<ITimeEntry>>('/api/timesheet').subscribe((data: Array<ITimeEntry>) => {
			this.TimeSheetEntries = data;
		});
	}

	public GetCode(TimeEntry: ITimeEntry): string {
		let DisplayCode: string = '';
		if (TimeEntry.MantisId) {
			DisplayCode = `Mantis ${TimeEntry.MantisId}`;
		}
		if (TimeEntry.AdminCode) {
			if(DisplayCode.length > 0) {
				DisplayCode += ` (${TimeEntry.AdminCode})`;
			} else {
				DisplayCode = TimeEntry.AdminCode.toString();
			}
		}
		return DisplayCode;
	}
}
