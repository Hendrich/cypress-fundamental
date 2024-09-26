describe("API", () => {
  it("Hit api method GET", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users",
      headers: {},
      body: {},
    }).then((response) => {
      cy.log(response);
      expect(response.status).to.eq(200);
      expect(response.body[0].gender).to.equal("female");
      expect(response.body[0].name).to.is.not.null;
    });
  });
});
