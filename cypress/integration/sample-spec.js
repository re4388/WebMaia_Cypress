
import { v4 as uuidv4 } from 'uuid';

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


  // it('can log in with "ben" and "12345" and see "Project", create project and then delete the project', () => {
  //   cy.get('#mat-input-0').type('ben')
  //   cy.get('#mat-input-1').type('123456')
  //   cy.get('.mat-focus-indicator').click()
  //   cy.get('#mat-dialog-title-0').should('contain', `Project`)

  //   cy.wait(2000)
  //   // click new project
  //   // cy.get('[fxlayoutgap="10px"] > :nth-child(2) > .mat-button-wrapper').click()
  //   cy.contains('New Project').click();

  //   let projectName = 'cypress-test-project'
  //   cy.get('#mat-input-2').clear()
  //   cy.get('#mat-input-2').type(projectName);

  //   // click ok
  //   cy.contains('OK').click()

  //   /* ready to delete the project */
  //   // click project button
  //   cy.get('[title="Project"] > img').click()

  //   // click the project itself
  //   cy.contains(projectName).click();

  //   // click the delete button
  //   cy.contains('Delete Project').click();
  //   cy.contains('Yes').click();

  // })


  /* A script to let me check if the procedure is OK until the train is kick off */
  it('Log in -> create project -> load DICOM train data -> train ', () => {


/* -------------------------------------------------------------------------- */
/*                                   log in                                   */
/* -------------------------------------------------------------------------- */

    cy.get('#mat-input-0').type('ben')
    cy.get('#mat-input-1').type('123456')
    cy.get('.mat-focus-indicator').click()


    // check if we login
    cy.get('#mat-dialog-title-0').should('contain', `Project`)

    cy.wait(2000)



/* -------------------------------------------------------------------------- */
/*                              click new project                             */
/* -------------------------------------------------------------------------- */

    // cy.get('[fxlayoutgap="10px"] > :nth-child(2) > .mat-button-wrapper').click()
    cy.contains('New Project').click();



    let projectName = 'cypress-test-project' + uuidv4()
    cy.get('#mat-input-2').clear()
    cy.get('#mat-input-2').type(projectName);

    // choose DICOM project
    cy.contains('Dicom').click()

    // click ok
    cy.contains('OK').click()

    cy.wait(3000)

    // cy.get('[title="Train"] > img').should('be.visible')

/* -------------------------------------------------------------------------- */
/*                               load train data                              */
/* -------------------------------------------------------------------------- */

    // click the Training Set Button
    cy.get('[title="Training Set"] > img').click();

    // click the folder
    cy.contains('_rsna_pneumonia_dicom_multi_small_fake_binary').dblclick();


    cy.contains('train').click();
    cy.contains('Upload').click();


    /* I think we don't need to wait sec,
    the Cypress will wait the browser threads processes is all finished
    in this case, no! You need to wait visible */

    //
    cy.wait(8000)

/* -------------------------------------------------------------------------- */
/*                              Train step begin                              */
/* -------------------------------------------------------------------------- */

    cy.get('[title="Train"] > img').click();
    cy.contains('Next').click();

    cy.wait(2000)



  })







  // it('has a visible star logo', function() {
    // cy.get('.icon-logo-star').should('be.visible');
  // });





})