it("Should fill Keep me", () => {
  cy.visit("http://zero.webappsecurity.com/login.html");
  //centang
  cy.get("#user_remember_me").check();
  cy.get("#user_remember_me").should("be.checked");
  //jika tidak dicentang
  //cy.get("#user_remember_me").uncheck();
});
