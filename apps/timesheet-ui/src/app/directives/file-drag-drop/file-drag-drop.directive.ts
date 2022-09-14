import {
	Directive,
	ElementRef,
	EventEmitter,
	HostListener,
	Input,
	Output,
} from '@angular/core';

@Directive({
	selector: '[sweda-ts-file-drag-drop]',
})
export class FileDragDropDirective {
	@Input() DropZoneBorder: string = 'dotted 1px lightgrey';
	@Input() DragOverDropZoneBorder: string = 'solid 2px green';
	@Output() FilesDropped = new EventEmitter<FileList>(); // FileList is JS array of File objects

	constructor(private el: ElementRef) {
		this.SetDropZoneAttributes_(this.DropZoneBorder);
	}

	private SetDropZoneAttributes_(Border: string): void {
		this.el.nativeElement.style.border = Border;
	}

	// Drop listener
	@HostListener('drop', ['$event']) public OnFileDrop($event: any) {
		$event.preventDefault(); // Prevent Default behaviour so as to not open the file.
		$event.stopPropagation(); // Stop Propagation so as to not open the file.
		this.SetDropZoneAttributes_(this.DropZoneBorder);

		if ('dataTransfer' in $event) {
			const TransferInfo = $event.dataTransfer; // should be the file list
			const Files = TransferInfo.files;
			if (Files.length > 0) {
				this.FilesDropped.emit(Files); // Emit the file list to the parent component
			}
		}
	}

	// Dragover listener - User has data hovering over the drop zone with files
	@HostListener('dragover', ['$event']) OnDragOver($event: any) {
		$event.preventDefault();
		$event.stopPropagation();
		this.SetDropZoneAttributes_(this.DragOverDropZoneBorder);
	}

	// Dragend listener - User ended the rag/drop
	@HostListener('dragend', ['$event']) public OnDragEnd($event: any) {
		$event.preventDefault();
		$event.stopPropagation();
		this.SetDropZoneAttributes_(this.DropZoneBorder);
	}

	// Dragleave listener - User moved out of the drop zone
	@HostListener('dragleave', ['$event']) public OnDragLeave($event: any) {
		$event.preventDefault();
		$event.stopPropagation();
		this.SetDropZoneAttributes_(this.DropZoneBorder);
	}
}
