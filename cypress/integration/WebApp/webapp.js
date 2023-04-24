import {Given,Then} from 'cypress-cucumber-preprocessor/steps'

Given(/^I open app page$/, () => {
	cy.visit('/');
});

Then(/^I see "([^"]*)" in the title$/, (args1) => {
	console.log(args1);
});
