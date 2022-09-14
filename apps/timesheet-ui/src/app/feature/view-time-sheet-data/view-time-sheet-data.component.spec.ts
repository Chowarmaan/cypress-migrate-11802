import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTimeSheetDataComponent } from './view-time-sheet-data.component';

describe('ViewTimeSheetDataComponent', () => {
	let component: ViewTimeSheetDataComponent;
	let fixture: ComponentFixture<ViewTimeSheetDataComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ViewTimeSheetDataComponent],
			imports: [HttpClientModule],
		}).compileComponents();

		fixture = TestBed.createComponent(ViewTimeSheetDataComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
