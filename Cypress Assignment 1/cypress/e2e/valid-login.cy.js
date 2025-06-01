describe("Valid login test", () => {
	it("Should be redirected to home page", () => {
		cy.visit("/");

		cy.get("input[name='email']").type("k@g.com");
		cy.get("input[name='password']").type("123123");
		cy.get("button[type='submit']").click();
		
		cy.url().should("eq", `${Cypress.config().baseUrl}`);
		cy.contains("Movies").should("exist");
	})
})