describe("Add a new Movie", () => {
	it("Should add a new movie", () => {
		cy.visit("/");

		cy.get("input[name='email']").type("k@g.com");
		cy.get("input[name='password']").type("123123");
		cy.get("button[type='submit']").click();

		cy.url().should("eq", `${Cypress.config().baseUrl}`);

		cy.contains("Add Movies").click();

		// Ensure we're on the add page
		cy.url().should("include", "/add");
	
		cy.get("input[name='poster']").type("https://m.media-amazon.com/images/M/MV5BZThmNDg1NjUtNWJhMC00YjA3LWJiMjItNmM4ZDQ5ZGZiN2Y2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg");
		cy.get("input[name='name']").type("Animal");
		cy.get("input[name='year']").type("2023");
		cy.get("input[name='genere']").type("Drama");
		cy.get("input[name='details']").type("The hardened son of a powerful industrialist returns home after years abroad and vows to take bloody revenge on those threatening his father's life.");
		cy.get("input[name='rating']").type("6.1");
		
		cy.get("button[type='submit']").click();

		cy.contains("Movie added").should("exist");
		cy.url().should("eq", `${Cypress.config().baseUrl}`);
	})
})