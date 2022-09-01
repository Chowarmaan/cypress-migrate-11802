import {
	HeaderMenuButton,
	HeaderMenuTitleText,
	HeaderUserAccountButton,
} from './../support/app-header.po';

describe('Sweda Timesheets UI Header', () => {
	// const UserAccountMenu: string = 'UserAccountMenu';
	beforeEach(() => cy.visit('/'));

	it('should display the header menu button', () => {
		HeaderMenuButton().should('be.visible');
		HeaderMenuButton().find('mat-icon').contains('menu');
	});

	it('should display title of the application', () => {
		HeaderMenuTitleText().contains('Sweda Timesheets');
	});

	it('should display the user account menu button', () => {
		const HeaderUserAccountButton = () =>
			cy.get('[data-testid=user-account-menu-button]');
		HeaderUserAccountButton().should('be.visible');
		HeaderUserAccountButton().find('mat-icon').contains('account_circle');
		HeaderUserAccountButton()
			.find('mat-icon')
			.should('have.text', 'account_circle');
	});

	it('should have the alert button visible', () => {
		const HeaderUserAlertNotificationButton = () =>
			cy.get('[data-testid=user-alert-notification-button]');
		HeaderUserAlertNotificationButton().should('be.visible');
		HeaderUserAlertNotificationButton()
			.find('mat-icon')
			.contains('notifications');
	});

	it('should start with the alert button disable and no notifications pending', () => {
		const HeaderUserAlertNotificationButtonIcon = () =>
			cy.get('[data-testid=user-alert-notification-button-icon]');
		HeaderUserAlertNotificationButtonIcon().should('be.visible');
		HeaderUserAlertNotificationButtonIcon().should(
			'have.class',
			'mat-badge-warn'
		);
		HeaderUserAlertNotificationButtonIcon()
			.find('span')
			.should('have.text', '0');
		HeaderUserAlertNotificationButtonIcon().should(
			'have.class',
			'mat-badge-hidden'
		);
	});

	xit('should show the badge in the proper loction when notification alerts are available', () => {
		const HeaderUserAlertNotificationButtonIcon = () =>
			cy.get('[data-testid=user-alert-notification-button-icon]');
		HeaderUserAlertNotificationButtonIcon().should('be.visible');
		HeaderUserAlertNotificationButtonIcon().should(
			'have.class',
			'mat-badge-warn'
		);
		HeaderUserAlertNotificationButtonIcon().should(
			'have.class',
			'mat-badge-above'
		);
		HeaderUserAlertNotificationButtonIcon().should(
			'have.class',
			'mat-badge-after'
		);
		HeaderUserAlertNotificationButtonIcon().should(
			'have.class',
			'mat-badge-overlap'
		);
		HeaderUserAlertNotificationButtonIcon()
			.find('span')
			.should('have.text', '1');
	});

	it('should have the correct alert notification screen reader text', () => {
		const HeaderUserAlertNotificationScreenReaderText = () =>
			cy.get('[data-testid=user-alert-notification-screen-reader-text]');
		HeaderUserAlertNotificationScreenReaderText().should('not.be.disabled');
		HeaderUserAlertNotificationScreenReaderText().contains(
			'You have 0 alerts'
		);
	});
});
