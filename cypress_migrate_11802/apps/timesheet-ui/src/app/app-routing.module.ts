import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadExcelTimeSheetComponent } from './components/upload-excel-time-sheet/upload-excel-time-sheet.component';

const AppRoutes: Routes = [
	{ path: '', component: UploadExcelTimeSheetComponent },
	{
		path: 'view',
		loadChildren: () =>
			import(
				'./feature/view-time-sheet-data/view-time-sheet-data.module'
			).then((m) => m.ViewTimeSheetDataModule),
	},
	// { path: 'upload', loadChildren: () => import('./features/upload-time-sheet/upload-time-sheet.module').then(m => m.UploadTimeSheetModule) },
	{ path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(AppRoutes, {
			initialNavigation: 'enabledBlocking',
			useHash: true,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
