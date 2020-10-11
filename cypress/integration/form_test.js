describe("test our form inputs", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })
    it("add texts to input and submit form", () => {
        // fill out form
        cy.get("[data-cy=name]").type("William Jensen").should("have.value", "William Jensen");
        cy.get("[data-cy=email]").type("wbjensen01@gmail.com").should("have.value", "wbjensen01@gmail.com");
        cy.get("[data-cy=motivation]").type("I want to help").should("have.value", "I want to help");
        cy.get("[data-cy=positions]").select("Yard Work").should("have.value", "Yard Work");
        cy.get("[type=checkbox]").check().should("be.checked");
        
        // submit the form
        cy.get("[data-cy=submit]").click();

        //checks that the submit effect shows on page (confirmation msg)
        cy.get("pre").should("exist");
    });

    /* beforeEach will run before each "it" within the same describe*/
    // it

    // it
})