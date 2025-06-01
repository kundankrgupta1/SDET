describe("Invalid Login attempt", () => {
	it("Should not login with incorrect credentials", () => {
		cy.visit("/");
		cy.get("input[name='email']").type("wrong@examples.vom");
		cy.get("input[name='password']").type("worngpassword");
		cy.get("button[type='submit']").click();

		cy.contains("Request failed with status code 409").should("exist");
		cy.url().should("include", "/login");
	})
})