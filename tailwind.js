
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.getElementById("closeBtn");

function openModal(img) {
  modalImg.src = img.currentSrc || img.src;
  modalImg.alt = img.alt || "Image preview";

  // 👇 KOPIEER DE ROTATIE
  const computedStyle = window.getComputedStyle(img);
  modalImg.style.transform = computedStyle.transform;

  overlay.classList.remove("hidden");
  overlay.classList.add("flex");
  document.body.classList.add("overflow-hidden");
}

function closeModal() {
  overlay.classList.add("hidden");
  overlay.classList.remove("flex");

  modalImg.src = "";
  modalImg.alt = "";
  modalImg.style.transform = ""; // reset rotatie

  document.body.classList.remove("overflow-hidden");
}


  // Open only images you explicitly allow
  document.addEventListener("click", (e) => {
    const img = e.target.closest("img[data-modal]");
    if (!img) return;
    openModal(img);
  });

  closeBtn.addEventListener("click", closeModal);

  // Click backdrop (not the image) to close
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.classList.contains("hidden")) closeModal();
  });
});
