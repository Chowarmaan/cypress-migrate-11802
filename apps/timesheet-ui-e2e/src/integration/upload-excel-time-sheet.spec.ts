describe('Upload Time Sheets', () => {
	beforeEach(() => cy.visit('/'));

	it('should have the proper page title', () => {
		cy.get('[data-testid=upload-time-sheet-title').contains(
			'Upload Excel Time Sheet'
		);
	});

	// it('should have the upload drop zone', () => {
	// 	const UploadDropZone = () => cy.get('[data-testid=file-drop-zone]');
	// 	UploadDropZone().should('exist');
	// 	UploadDropZone().should('be.visible');
	// });

	// it('should have the input type as file', () => {
	// 	const InputType = () => cy.get('[data-testid=file-drop-input]');
	// 	InputType().should('exist');
	// 	InputType().should('have.attr', 'type', 'file');
	// });

	// it('should have the file input reference set for multiple files', () => {
	// 	const InputType = () => cy.get('[data-testid=file-drop-input]');
	// 	InputType().should('exist');
	// 	InputType().should('have.attr', 'multiple', 'multiple');
	// });

	// it('should have the image for the Timesheet upload', () => {
	// 	const Image = () => cy.get('[data-testid=file-drop-upload-timesheet-image]');
	// 	Image().should('exist');
	// 	Image().should('be.visible');
	// 	Image().should('have.attr', 'src', 'assets/images/file-cloud-upload-icon.png');
	// });

	// it('should have the instruction text for the Timesheet drag and drop upload', () => {
	// 	const InstructionText = () => cy.get('[data-testid=file-drop-zone-instruction]');
	// 	InstructionText().should('exist');
	// 	InstructionText().should('be.visible');
	// 	InstructionText().contains('Drag and drop your Excel timesheet(s) here');
	// });

	// it('should have a browse button with the proper label', () => {
	// 	const BrowseButton = () => cy.get('[data-testid=file-drop-zone-browse-button]');
	// 	BrowseButton().should('exist');
	// 	BrowseButton().should('be.visible');
	// 	BrowseButton().contains('Browse for file');
	// });
});
