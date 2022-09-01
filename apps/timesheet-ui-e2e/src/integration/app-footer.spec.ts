describe('Sweda Timesheets UI Footer', () => {
	beforeEach(() => cy.visit('/'));

	it('should display the footer', () => {
		cy.get('footer').should('be.visible');
	});

	it('should have the proper copyright in the footer', () => {
		const CurrentYear = new Date().getFullYear();
		const StartOfCopyright = CurrentYear === 2022 ? '' : '2022 - ';
		const Copyright = `© ${StartOfCopyright}${CurrentYear.toString()} Sweda Canada Inc.`;

		const Footer = () => cy.get('footer');
		Footer()
			.find('[data-testid=footer-copyright-text]')
			.contains(Copyright);
	});

	it('should display the version in the footer', () => {
		const Footer = () => cy.get('footer');
		const FooterVersion = () =>
			Footer().find('[data-testid=footer-version-text]');
		FooterVersion().should('not.be.empty');
		FooterVersion().contains('v');
		FooterVersion().contains('.');
	});
});
