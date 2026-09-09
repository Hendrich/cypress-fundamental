describe("API", () => {

  let token = "";
  it("Hit api method POST", () => {
    cy.request({
      method: "POST",
      url: "https://api-script-labs.hendri.me/api/auth/login",
      headers: {},
      body: {
        "email": "standard_user@example.com",
        "password": "script_sauce"
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response.body.data.token).to.be.a("string");
      token = response.body.data.token;
    });
  });

  it("Hit api method GET", () => {
    cy.request({
      method: "GET",
      url: "https://api-script-labs.hendri.me/api/labs",
      headers: {Authorization: `Bearer ${token}`},
    }).then((response) => {
      cy.log(JSON.stringify(response.body.data));
      expect(response.status).to.eq(200);
      expect(response.body.data).to.be.an("array");
    });
  });
});
