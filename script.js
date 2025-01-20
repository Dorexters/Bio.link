// Pastikan konten "Connect with Me" disembunyikan saat pertama kali
document.getElementById("connectContent").style.display = "none";

// Fungsi umum untuk toggle konten
function toggleContent(contentId, animationIn, animationOut, displayType) {
    const content = document.getElementById(contentId);
    const otherContent = contentId === "aboutMeContent" ? "connectContent" : "aboutMeContent";
    
    // Hentikan event bubbling agar tidak memicu penutupan konten ketika tombol ditekan
    event.stopPropagation();
    
    if (content.style.display === displayType) {
        content.style.animation = animationOut;
        setTimeout(function () {
            content.style.display = "none";
        }, 400); // Menunggu animasi selesai sebelum menyembunyikan elemen
    } else {
        content.style.display = displayType;
        content.style.animation = animationIn;
    }

    // Sembunyikan konten lainnya
    document.getElementById(otherContent).style.display = "none";
}

// Fungsi untuk toggle konten About Me
document.getElementById("aboutMeButton").addEventListener("click", function (event) {
    const container = document.querySelector(".container");

    // Tambahkan animasi interaksi pada kontainer
    container.classList.add("interacted");

    // Hapus animasi interaksi setelah selesai
    setTimeout(function () {
        container.classList.remove("interacted");
    }, 300); // Menunggu animasi selesai

    toggleContent("aboutMeContent", "content-fade-in 0.4s ease-out forwards", "content-fade-out 0.4s ease-out forwards", "block");
});

// Fungsi untuk toggle konten Connect with Me
document.getElementById("connectButton").addEventListener("click", function (event) {
    const container = document.querySelector(".container");

    // Tambahkan animasi interaksi pada kontainer
    container.classList.add("interacted");

    // Hapus animasi interaksi setelah selesai
    setTimeout(function () {
        container.classList.remove("interacted");
    }, 300); // Menunggu animasi selesai

    toggleContent("connectContent", "content-fade-in 0.4s ease-out forwards", "content-fade-out 0.4s ease-out forwards", "flex");
});

// Tutup konten saat klik di luar kontainer
document.addEventListener("click", function (event) {
    const container = document.querySelector(".container");
    const aboutMeContent = document.getElementById("aboutMeContent");
    const connectContent = document.getElementById("connectContent");

    if (!container.contains(event.target)) {
        if (aboutMeContent.style.display === "block") {
            aboutMeContent.style.animation = "content-fade-out 0.4s ease-out forwards";
            setTimeout(function () {
                aboutMeContent.style.display = "none";
            }, 400);
        }
        if (connectContent.style.display === "flex") {
            connectContent.style.animation = "content-fade-out 0.4s ease-out forwards";
            setTimeout(function () {
                connectContent.style.display = "none";
            }, 400);
        }
    }
});

// Pastikan klik di dalam kontainer hanya menutup konten yang terbuka
document.querySelector(".container").addEventListener("click", function (event) {
    const aboutMeContent = document.getElementById("aboutMeContent");
    const connectContent = document.getElementById("connectContent");

    // Sembunyikan konten yang terbuka jika klik di dalam kontainer
    if (aboutMeContent.style.display === "block") {
        aboutMeContent.style.animation = "content-fade-out 0.4s ease-out forwards";
        setTimeout(function () {
            aboutMeContent.style.display = "none";
        }, 400);
    } else if (connectContent.style.display === "flex") {
        connectContent.style.animation = "content-fade-out 0.4s ease-out forwards";
        setTimeout(function () {
            connectContent.style.display = "none";
        }, 400);
    }

    // Hentikan event bubbling supaya tidak memicu penutupan lainnya
    event.stopPropagation();
});