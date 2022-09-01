import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadExcelTimeSheetComponent } from './upload-excel-time-sheet.component';

describe('UploadExcelTimeSheetComponent', () => {
	let component: UploadExcelTimeSheetComponent;
	let fixture: ComponentFixture<UploadExcelTimeSheetComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [UploadExcelTimeSheetComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(UploadExcelTimeSheetComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
