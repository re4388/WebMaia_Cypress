describe('Web Maia Home Page', () => {

  beforeEach( () => {
    cy.visit('http://52.250.3.237/login');
  });

  it('contains "muenMaia" ', () => {
    cy.title().should('contain', `MuenMaiaFrontend`)
  })


  it('homepage has a logo',  () => {
    cy.get('[style="margin-right: 10px; letter-spacing: 5px;"]')
      .should('be.visible')
  })

  it('homepage has copyright claim', () => {
    cy.get('[fxflex="50px"] > .mat-small')
    .should(`contain`, `Copyright © Muen Biomedical and Optoelelctronic Technologies Inc All Rights Reserved.`)
  })


  it('can log in with "ben" and "12345" and see "Project", create project and then delete the project', () => {
    cy.get('#mat-input-0').type('ben')
    cy.get('#mat-input-1').type('123456')
    cy.get('.mat-focus-indicator').click()
    cy.get('#mat-dialog-title-0').should('contain', `Project`)

    cy.wait(2000)

    // click new project
    // cy.get('[fxlayoutgap="10px"] > :nth-child(2) > .mat-button-wrapper').click()
    cy.contains('New Project').click();

    // click ok
    cy.contains('OK').click()


    /* ready to delete the project */
    // click project button
    cy.get('[title="Project"] > img').click()

    // click the project itself
    cy.contains('2020-9-5_new_project').click();

    // click the delete button
    cy.contains('Delete Project').click();
    cy.contains('Yes').click();



  })







  // it('has a visible star logo', function() {
    // cy.get('.icon-logo-star').should('be.visible');
  // });





})