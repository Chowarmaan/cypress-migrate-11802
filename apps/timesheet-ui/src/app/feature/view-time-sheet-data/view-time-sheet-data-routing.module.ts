import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTimeSheetDataComponent } from './view-time-sheet-data.component';

const routes: Routes = [{ path: '', component: ViewTimeSheetDataComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ViewTimeSheetDataRoutingModule {}
