document.addEventListener("DOMContentLoaded", () => {
  const aboutBtn = document.getElementById("aboutMeButton");
  const connectBtn = document.getElementById("connectButton");
  const aboutContent = document.getElementById("aboutMeContent");
  const connectContent = document.getElementById("connectContent");
  const container = document.querySelector(".container");

  // Pastikan konten hidden saat awal
  [aboutContent, connectContent].forEach(content => {
    content.classList.remove("active", "closing");
    content.style.visibility = "hidden";
    content.style.maxHeight = "0"; // Pastikan max-height 0 awal
  });

  // Update aria-expanded untuk aksesibilitas
  function updateAriaAttributes(button, isExpanded) {
    button.setAttribute("aria-expanded", isExpanded);
  }

  // Cek apakah ada konten yang aktif
  function hasActiveContent() {
    return aboutContent.classList.contains("active") || connectContent.classList.contains("active");
  }

  // Close section dengan animasi
  function closeSection(button, content) {
    if (!content.classList.contains("active")) return;

    content.classList.remove("active");
    content.classList.add("closing");
    updateAriaAttributes(button, false);

    // Set max-height ke 0 untuk animasi close
    content.style.maxHeight = "0";

    content.addEventListener("animationend", () => {
      content.classList.remove("closing");
      content.style.visibility = "hidden";
      // Hapus efek container jika tidak ada konten aktif
      if (!hasActiveContent()) {
        container.classList.remove("accordion-open");
      }
    }, { once: true });

    button.classList.remove("active");
  }

  // Open section dengan animasi
  function openSection(button, content) {
    // Close konten lain jika ada
    if (aboutContent !== content && aboutContent.classList.contains("active")) {
      closeSection(aboutBtn, aboutContent);
    }
    if (connectContent !== content && connectContent.classList.contains("active")) {
      closeSection(connectBtn, connectContent);
    }

    // Open konten sekarang
    content.style.visibility = "visible";
    content.classList.add("active");
    button.classList.add("active");
    updateAriaAttributes(button, true);

    // Set max-height ke tinggi aktual untuk menyesuaikan isi tanpa space berlebih
    content.style.maxHeight = content.scrollHeight + "px";

    // Tambahkan efek container
    container.classList.add("accordion-open");
  }

  // Toggle section
  function toggleSection(button, content) {
    if (content.classList.contains("active")) {
      closeSection(button, content);
    } else {
      openSection(button, content);
    }
  }

  // Event listener untuk tombol
  aboutBtn.addEventListener("click", e => {
    e.stopPropagation();
    toggleSection(aboutBtn, aboutContent);
  });

  connectBtn.addEventListener("click", e => {
    e.stopPropagation();
    toggleSection(connectBtn, connectContent);
  });

  // Close saat klik di luar container
  document.addEventListener("click", e => {
    if (!container.contains(e.target)) {
      [[aboutBtn, aboutContent], [connectBtn, connectContent]].forEach(([btn, content]) => {
        closeSection(btn, content);
      });
    }
  });

  // Close saat tekan Escape
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      [[aboutBtn, aboutContent], [connectBtn, connectContent]].forEach(([btn, content]) => {
        closeSection(btn, content);
      });
    }
  });

  // Reset animasi saat resize (opsional, untuk menghindari glitch)
  window.addEventListener("resize", () => {
    [aboutContent, connectContent].forEach(content => {
      if (content.classList.contains("active")) {
        content.style.animation = "none";
        content.style.maxHeight = content.scrollHeight + "px"; // Update max-height saat resize
        setTimeout(() => {
          content.style.animation = "";
        }, 10);
      }
    });
  });
});
