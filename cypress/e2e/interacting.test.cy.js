describe("books", () => {
  it("test visi", () => {
    cy.visit("https://books.toscrape.com/index.html", { timeout: 10000 });
    cy.url().should("include", "index.html");
  });

  it("travel", () => {
    cy.visit("https://books.toscrape.com/index.html", { timeout: 10000 });
    cy.get("a").contains("Travel").click();
    cy.get("h1").contains("Travel");
  });
});
