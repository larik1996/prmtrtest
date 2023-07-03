describe('Parametrized test', () => {
    const formData = [
        { email: 'test1@test.com', password: 'password1', option: 'Option 1' },
    ];

    formData.forEach((data, index) => {
        it(`Test for homework - Test Case ${index + 1}`, () => {
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
            cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
            cy.get('[title="Forms"]').click();
            cy.get('[title="Form Layouts"]').click();
            cy.get('#inputEmail1').type(data.email);
            cy.get('#inputPassword2').type(gdata.password);
            cy.contains('label', data.option).click();
            cy.contains('button', 'Sign in').click();
        });
    });
});


