describe("Login page ui test", () => {
	it("Should display login form and feilds", () => {
		cy.visit("/");
		cy.contains("Login");
		cy.get('input[name="email"]').should("be.visible");
		cy.get('input[name="password"]').should("be.visible");
		cy.get('button[type="submit"]').should("be.visible");
	})
})