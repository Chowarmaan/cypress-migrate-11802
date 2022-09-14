import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FileDragDropDirective } from './directives/file-drag-drop/file-drag-drop.directive';
import { AlertsService } from './services/alerts.service';

import { AppComponent } from './app.component';
import { UploadExcelTimeSheetComponent } from './components/upload-excel-time-sheet/upload-excel-time-sheet.component';

@NgModule({
	declarations: [
		AppComponent,
		FileDragDropDirective,
		FooterComponent,
		HeaderComponent,
		SidebarComponent,
		UploadExcelTimeSheetComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		MatBadgeModule,
		MatButtonModule,
		MatDividerModule,
		MatIconModule,
		MatListModule,
		MatMenuModule,
		MatSidenavModule,
		MatToolbarModule,
	],
	providers: [AlertsService],
	bootstrap: [AppComponent],
})
export class AppModule {}
