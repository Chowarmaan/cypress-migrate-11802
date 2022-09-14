import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'sweda-ts-upload-excel-time-sheet',
	templateUrl: './upload-excel-time-sheet.component.html',
	styleUrls: ['./upload-excel-time-sheet.component.scss'],
})
export class UploadExcelTimeSheetComponent implements OnInit {
	public DragDropInstruction: string =
		'Drag and drop Excel timesheet(s) here';
	public BrowseForFileText: string = 'Click to browse for file(s)';
	public PageTitle: string = 'Upload Excel Time Sheet';

	public Files: any[] = [];

	constructor() {}

	ngOnInit(): void {
		;
	}


	/**
	 * on file drop handler
	 */
	OnFileDropped($event: any) {
		this.PrepareFilesList($event);
	}

	/**
	 * handle file from browsing
	 */
	FileBrowseHandler(files: any) {
		const ListOfFiles = files.target.files;
		this.PrepareFilesList(ListOfFiles);
	}

	/**
	 * Delete file from files list
	 * @param Index (File index)
	 */
	DeleteFile(Index: number) {
		this.Files[Index] = this.Files[this.Files.length - 1];
		this.Files.pop(); // orders of magnitude faster!
	}

	//   /**
	//    * Simulate the upload process
	//    */
	//   uploadFilesSimulator(index: number) {
	//     setTimeout(() => {
	//       if (index === this.files.length) {
	//         return;
	//       } else {
	//         const progressInterval = setInterval(() => {
	//           if (this.files[index].progress === 100) {
	//             clearInterval(progressInterval);
	//             this.uploadFilesSimulator(index + 1);
	//           } else {
	//             this.files[index].progress += 5;
	//           }
	//         }, 200);
	//       }
	//     }, 1000);
	//   }

	/**
	 * Convert Files list to normal array list
	 * @param files (Files List)
	 */
	PrepareFilesList(files: Array<any>) {
		for (const item of files) {
			item.progress = 0;
			this.Files.push(item);
		}
		// this.uploadFilesSimulator(0);
	}

	/**
	 * format bytes
	 * @param bytes (File size in bytes)
	 * @param decimals (Decimals point)
	 */
	FormatBytes(bytes: number, decimals: number = 0) {
		if (bytes === 0) {
			return '0 Bytes';
		}
		const k = 1024;
		const dm = decimals <= 0 ? 0 : decimals || 2;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return (
			parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
		);
	}
}

// public FileToUpload: any;
// public FileContent: string | undefined;
// public FileError: string | undefined;

// public GetFile($event: any): void {
// 	this.FileToUpload = $event?.target?.files[0];
// 	console.log('File', this.FileToUpload);
// 	const reader: FileReader = new FileReader();
// 	reader.onload = () => {
// 		this.FileContent = reader.result as string;
// 	};
// 	reader.onerror = (error) => {
// 		this.FileError = `Error reading file: ${error}`;
// 	};
// 	reader.readAsText(this.FileToUpload);
// }

// public UploadFile(): void {
// 	const UploadTimeSheetFormData: FormData = new FormData();
// 	UploadTimeSheetFormData.set("file", this.FileToUpload);

// 	// call API
// 	// this.http
// 	// .post('http:/localhost:3001/upload/', UploadTimeSheetFormData)
// 	// .subscribe( (_response: any) => {});
// }
