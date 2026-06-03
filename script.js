document.addEventListener("DOMContentLoaded", () => {
    const aboutBtn = document.getElementById("aboutMeButton");
    const connectBtn = document.getElementById("connectButton");
    const aboutContent = document.getElementById("aboutMeContent");
    const connectContent = document.getElementById("connectContent");
    const container = document.querySelector(".container");

   attribute
    [aboutContent, connectContent].forEach(content => {
        content.classList.remove("active", "closing");
        content.style.visibility = "hidden";
        content.style.maxHeight = "0";
        content.style.transform = "scaleY(0)"; // Pastikan transform awal
        content.setAttribute('hidden', 'true'); // Aksesibilitas
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

        // Langkah 1: Atur max-height ke tinggi saat ini untuk memulai animasi
        content.style.maxHeight = content.scrollHeight + "px";
        // Trigger reflow
        void content.offsetWidth;
        // Langkah 2: Atur max-height ke 0 untuk animasi close
        content.style.maxHeight = "0";
        content.style.transform = "scaleY(0)";

        content.addEventListener("transitionend", function onTransitionEnd(e) {
            if (e.propertyName === 'max-height' || e.propertyName === 'transform') { // Cek properti yang selesai
                content.classList.remove("closing");
                content.style.visibility = "hidden";
                content.setAttribute('hidden', 'true'); // Aksesibilitas
                content.style.overflow = ''; // Kembalikan overflow default
                // Hapus efek container jika tidak ada konten aktif
                if (!hasActiveContent()) {
                    container.classList.remove("accordion-open");
                }
                // Hapus event listener agar tidak terpicu lagi
                content.removeEventListener("transitionend", onTransitionEnd);
            }
        }, { once: true }); // Gunakan once: true agar otomatis dihapus

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
        content.removeAttribute('hidden'); // Aksesibilitas
        content.classList.add("active");
        button.classList.add("active");
        updateAriaAttributes(button, true);

        // Langkah 1: Set overflow hidden untuk mencegah scroll sementara menghitung tinggi
        content.style.overflow = 'hidden';
        // Langkah 2: Atur max-height ke tinggi aktual untuk menyesuaikan isi
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.transform = "scaleY(1)";
        // Trigger reflow
        void content.offsetWidth; // Penting: force reflow sebelum langkah 3
        // Langkah 3: Set max-height ke tinggi aktual (scrollHeight) untuk memulai animasi
        content.style.maxHeight = content.scrollHeight + "px"; // Pastikan nilainya tetap scrollHeight

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
                // Hanya perbarui max-height jika konten aktif
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
