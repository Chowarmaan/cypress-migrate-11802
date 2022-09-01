import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'sweda-ts-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
	@Input() AppTitle: string = '';
	constructor() {}

	ngOnInit(): void {
		;
	}
}
