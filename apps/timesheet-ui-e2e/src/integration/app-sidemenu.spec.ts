import { HeaderMenuButton } from '../support/app-header.po';

describe('Sweda Timesheets UI Sidebar Menu', () => {
	const SideBarMenu = () => cy.get('[data-testid=sidebar-menu]');
	const SideBarNavList = () => cy.get('[data-testid=sidebar-menu-nav-list]');
	const SideBar = 'mat-drawer';
	const OpenIndicator = 'ng-reflect-opened';

	beforeEach(() => cy.visit('/'));

	it('should not be showing the sidebar menu', () => {
		SideBarMenu().should('be.visible'); // Will be visible as CSS is hiding it
	});

	it('should not have the sidebar menu open', () => {
		// Checking the value of a property using should('have.attr'):
		SideBarMenu().find(SideBar).should('have.attr', OpenIndicator, 'false');
	});

	it('should open the sidebar menu when selecting the header menu button', () => {
		HeaderMenuButton().should('be.visible');
		SideBarMenu().find(SideBar).should('have.attr', OpenIndicator, 'false');
		HeaderMenuButton().click();
		SideBarMenu().find(SideBar).should('have.attr', OpenIndicator, 'true');
	});

	it('should close the sidebar menu when selecting the header menu button again', () => {
		HeaderMenuButton().should('be.visible');
		SideBarMenu().find(SideBar).should('have.attr', OpenIndicator, 'false'); // beforeEach reloads page each time
		HeaderMenuButton().click();
		SideBarMenu().find(SideBar).should('have.attr', OpenIndicator, 'true');
		HeaderMenuButton().click();
		SideBarMenu().find(SideBar).should('have.attr', OpenIndicator, 'false');
	});

	it('should have the side menu subheaders <h2>', () => {
		const SideBarMenuSubHeader = () => SideBarNavList().children('h2');
		SideBarMenuSubHeader().should('have.length', 3);
		SideBarMenuSubHeader().eq(0).contains('Pages');
		SideBarMenuSubHeader().eq(1).contains('View Time Sheet Data');
		SideBarMenuSubHeader().eq(2).contains('Administration');
	});

	it('should have the side menu route options <a> with the correct href for each route', () => {
		const ExpectedRoutes = [
			{
				Description: 'Time Sheet Entry',
				URL: '/timesheetentry',
				Icon: 'create',
				RouteIndex: 0,
			},
			{
				Description: 'Upload Time Sheet',
				URL: '/',
				Icon: 'cloud_upload',
				RouteIndex: 1,
			},
			{
				Description: 'By Date(s)',
				URL: '/view',
				Icon: 'date_range',
				RouteIndex: 2,
			},
			{
				Description: 'By Mantis',
				URL: '/view',
				Icon: 'assignment',
				RouteIndex: 3,
			},
			{
				Description: 'By Resource(s)',
				URL: '/view',
				Icon: 'people',
				RouteIndex: 4,
			},
			{
				Description: 'Alerts',
				URL: '/alerts',
				Icon: 'notification_important',
				RouteIndex: 5,
			},
		];

		SideBarNavList()
			.children('a')
			.should('have.length', 6)
			.each((element, index) => {
				const Route = ExpectedRoutes[index];
				cy.wrap(element).should('have.attr', 'routerLink', Route.URL);
				// cy.wrap(element).should('have.attr', 'routerLinkActive', 'active');
				cy.wrap(element)
					.find('mat-icon')
					.should('have.text', Route.Icon);
				cy.wrap(element).contains(Route.Description);
			});
	});
});
