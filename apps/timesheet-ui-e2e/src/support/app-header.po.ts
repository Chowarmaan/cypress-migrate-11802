// Get the contents of the Title bar
export const HeaderMenuButton = () =>
	cy.get('[data-testid=header-menu-button]');

export const HeaderMenuTitleText = () =>
	cy.get('[data-testid=application-title-text]');

export const HeaderUserAccountButton = () =>
	cy.get('[data-testid=user-account-menu-button]');
