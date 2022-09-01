import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'sweda-ts-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
	@Input() CopyrightText: string = 'Copyright Sweda Canada Inc.';
	@Input() VersionText: string = 'v0.0.1';

	constructor() {}

	ngOnInit(): void {
		;
	}

}
