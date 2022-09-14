// import { getGreeting } from '../support/app.po';

describe('Sweda Timesheets UI', () => {
	beforeEach(() => cy.visit('/'));

	it('should have the proper title for the application', () => {
		cy.title().should('equal', 'Sweda Timesheets');
	});
});
