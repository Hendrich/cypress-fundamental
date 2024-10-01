Cypress.on("uncaught:exception", (err, runnable) => {
  // Periksa apakah error mengandung 401 dan abaikan error tersebut
  if (
    err.message.includes("401") ||
    err.message.includes("Failed to load resource")
  ) {
    // Mengembalikan false mencegah Cypress untuk gagal pada error ini
    return false;
  }

  // Jika bukan error yang ingin diabaikan, biarkan Cypress menangani
  return true;
});
