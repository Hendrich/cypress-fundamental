//lengkapi kode berikut agar tidak terjadi error

describe("My First Test", () => {
  it('clicking "type" shows the right headings', () => {
    cy.visit("https://example.cypress.io"); // Mengunjungi URL tujuan

    // cy.pause(); // Mem-pause eksekusi agar bisa di-debug

    cy.contains("type").click(); // Klik elemen yang mengandung teks 'type'

    // Memastikan URL berubah sesuai dengan halaman yang dituju setelah klik
    cy.url().should("include", "/commands/actions");

    // Dapatkan input dengan class .action-email, isi dengan email dan verifikasi
    cy.get(".action-email")
      .type("user@example.com") // Ketik ke dalam input email
      .should("have.value", "user@example.com"); // Memastikan value input sudah benar
  });
});

// Bagian cy.url().should('include', '/commands/actions')
//mengecek apakah URL berubah dan mengandung string /commands/actions setelah tindakan klik.
// cy.get('.action-email') digunakan untuk mendapatkan elemen input dengan class .action-email,
//kemudian mengisi elemen tersebut dengan teks 'user@example.com' menggunakan .type().
// should('have.value', 'user@example.com') memverifikasi bahwa nilai input telah benar terisi.
