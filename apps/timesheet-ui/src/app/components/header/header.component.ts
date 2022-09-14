import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'sweda-ts-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	@Input() AppTitle: string = '';
	@Input() AlertCount: number = 0;
	@Output() HeaderMenuButtonEvent: EventEmitter<any> = new EventEmitter();
	constructor() {}

	ngOnInit(): void {
		;
	}


	public HideWarningIcon(): boolean {
		return this.AlertCount === 0;
	}

	public HeaderMenuButtonClick() {
		this.HeaderMenuButtonEvent.emit();
	}
}
