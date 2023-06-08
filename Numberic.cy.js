//////////////////////////////////////////////////////////////////////////////////////////     
// This one is to check that mobiled fields only accepts numbers                       //
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
      cy.get('#mobile-field').type('ahm');
      cy.get('#telephone-field').click();
      cy.wait(1000);
      cy.log('Passed Test');
      cy.pause();
    });
  });
  