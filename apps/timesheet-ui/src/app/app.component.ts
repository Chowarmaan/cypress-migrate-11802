import { Component, OnInit } from '@angular/core';
import { APP_VERSION } from './app-version';
import { AlertsService } from './services/alerts.service';

@Component({
	selector: 'sweda-ts-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	private SideBarIsOpen_ = false;
	ApplicationTitle: string = 'Sweda Timesheets';
	Alerts: number = 0;

	constructor(private AlertData_: AlertsService) {
		this.Alerts = this.AlertData_.AlertCount();
	}

	ngOnInit(): void {
		;
	}

	get SideBarIsOpen(): boolean {
		return this.SideBarIsOpen_;
	}

	public ToggleSideBarVisibility() {
		this.SideBarIsOpen_ = !this.SideBarIsOpen_;
	}

	public Copyright(): string {
		const CurrentYear = new Date().getFullYear();
		const StartOfCopyright = CurrentYear === 2022 ? '' : '2022 - ';
		return `© ${StartOfCopyright}${CurrentYear.toString()} Sweda Canada Inc.`;
	}

	public Version(): string {
		return `v ${APP_VERSION}`;
	}
}
