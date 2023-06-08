//////////////////////////////////////////////////////////////////////////////////////////     
// This one is to check save and Edit Button                                           //
// Please make sure to run it again in case you recived an error says                 //
// side-nav-burger-menu-icon is not found after you retry three or four times it run //
//and i don't know why and sometimes it runs without showing this error             //
/////////////////////////////////////////////////////////////////////////////////////


describe('Profile Search Test', () => {
    beforeEach(() => {
      cy.visit('https://testingtasks.kwentra.com/frontoffice/#/profileslist?tenant_id=59');
      cy.get('#id_auth-username').type('testuser');
      cy.get('#id_auth-password').type('Test_user1234');
      cy.get('#login-submit-btn').click();
      cy.wait(5000)
    });
  
    // used below to handle the case of catching failure case
    //in case this required field message didn't appear
    it('validate ', () =>
    {   
      cy.on('fail', (err, runnable) => 
      {
         cy.log('fail');
        // return false
      })
      cy.get('#side-nav-burger-menu-icon').click();
      cy.get('#Profiles').click();
      cy.get('#create-btn').click();
      cy.get('#first_name-field').type('ahmed');
      cy.get('#last_name-field').type('mohamed');
      cy.get('#saveAndEdit-btn').click();
      cy.get('#first_name-field').should('have.value', 'ahmed');
      cy.get('#last_name-field').should('have.value', 'mohamed');
      cy.log('Passed Test');
      cy.pause();
    });
  });
  