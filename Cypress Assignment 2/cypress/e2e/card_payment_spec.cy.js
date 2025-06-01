describe("Payment getway testing", () => {
	it("Should payment getway work fine", () => {
		cy.visit("/")
		cy.get('.nav > :nth-child(9) > a').click();
	})
})