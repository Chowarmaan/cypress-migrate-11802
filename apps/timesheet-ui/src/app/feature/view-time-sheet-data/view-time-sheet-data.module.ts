import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ViewTimeSheetDataRoutingModule } from './view-time-sheet-data-routing.module';
import { ViewTimeSheetDataComponent } from './view-time-sheet-data.component';

@NgModule({
	declarations: [ViewTimeSheetDataComponent],
	imports: [CommonModule, ViewTimeSheetDataRoutingModule, HttpClientModule],
})
export class ViewTimeSheetDataModule {}
