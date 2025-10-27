/* ====== GLOBAL (UNTUK DESKTOP) ====== */
body {
margin: 0;
font-family: 'Poppins', sans-serif;
min-height: 100vh; /* Pastikan body setidaknya setinggi layar */
color: #ffffff;
/* Background desktop */
background: url("https://i.ibb.co.com/Lz7ST055/0588ec8d02d7e9014fc21f394b392ca8.webp") no-repeat center center/cover;
background-attachment: fixed; /* Tetap fixed di desktop */
display: flex; /* Gunakan flexbox */
justify-content: center; /* Posisikan konten (container) di tengah horizontal */
align-items: center;   /* Posisikan konten (container) di tengah vertikal */
/* Hapus padding karena sekarang kontainer di tengah layar */
padding: 0;
}

/* ====== KONTAINER UTAMA ====== */
.container {
background: rgba(127, 173, 224, 0.28);
backdrop-filter: blur(15px);
-webkit-backdrop-filter: blur(15px);
padding: 12px;
border-radius: 20px;
width: 90%;
max-width: 400px;
text-align: center;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
opacity: 1;
transform: translateY(0);
/* Hapus margin: 0 auto karena justify-content: center di body sudah menengahkan */
margin: 0;
border: 3px solid #ffffff;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
height: auto;
transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Efek halus ketika container menyesuaikan tinggi */
.container.accordion-open {
transform: scale(1.02);
box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

/* ====== PROFIL ====== */
.profile-section {
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 12px;
width: 100%;
}

.title {
font-size: 2em;
font-weight: 700;
margin-bottom: 8px;
color: #fff;
letter-spacing: 2px;
text-shadow: 0 0 15px rgba(255,255,255,0.3);
}

.profile-img {
width: 90px;
height: 90px;
border-radius: 50%;
border: 4px solid #eaf0f7;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
transition: transform 0.4s ease;
}

.profile-img:hover {
transform: scale(1.08) rotate(4deg);
}

/* ====== TOMBOL & KONTEN SECTION ====== */
.button-section {
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
gap: 4px; /* Jarak minimal antar elemen (tombol dan konten) */
}

.btn {
background: linear-gradient(90deg, #1e4d8e, #4e9ed8);
color: #ffffff;
font-weight: 700;
border: 1.8px solid #ffffff;
padding: 8px 14px;
margin: 4px 0;
width: 100%;
font-size: 15px;
border-radius: 14px;
cursor: pointer;
transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
display: flex;
justify-content: space-between;
align-items: center;
gap: 8px;
position: relative;
overflow: hidden;
}

/* Efek ripple pada tombol */
.btn::after {
content: '';
position: absolute;
top: 50%;
left: 50%;
width: 0;
height: 0;
border-radius: 50%;
background: rgba(255, 255, 255, 0.3);
transform: translate(-50%, -50%);
transition: width 0.6s, height 0.6s;
}

.btn:active::after {
width: 300px;
height: 300px;
}

.btn:hover {
background: linear-gradient(90deg, #2265a2, #6bb5ff);
transform: translateY(-1px);
border: 1.8px solid #ffffff;
box-shadow: 0 6px 14px rgba(255,255,255,0.3);
}

.btn.active {
background: linear-gradient(90deg, #2a7bc8, #7dc2ff);
transform: translateY(0);
box-shadow: 0 8px 20px rgba(255, 255, 255, 0.4);
}

/* ====== INDIKATOR TOMBOL ACCORDION ====== */
.btn-indicator {
font-size: 14px;
transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
margin-left: auto;
}

.btn.active .btn-indicator {
transform: rotate(180deg);
}

.btn-text {
flex: 1;
text-align: left;
}

/* ====== ANIMASI ACCORDION HALUS & DINAMIS ====== */
.hidden-content {
overflow: hidden;
max-height: 0; /* Nilai awal */
opacity: 0;
transform: scaleY(0); /* Gunakan scaleY untuk animasi tinggi */
transform-origin: top center; /* Titik transformasi dari atas */
transition: max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            opacity 0.3s ease,
            transform 0.3s ease;
margin: 0;
padding: 0;
width: 100%;
visibility: hidden;
box-sizing: border-box;
order: 1; /* Pastikan konten muncul setelah tombol dalam urutan tampilan fleksibel */
}

.hidden-content.active {
opacity: 1;
transform: scaleY(1); /* Kembali ke ukuran normal */
visibility: visible;
/* max-height akan diatur oleh JavaScript */
}

/* ====== ABOUT ME & CONNECT KONTEN ====== */
/* Styling untuk konten tetap, tetapi padding dikurangi */
#aboutMeContent .content-wrapper,
#connectContent .connect-section { /* Target elemen dalam konten */
background: rgba(255,255,255,0.98);
color: #062654;
font-weight: 400;
font-size: 13px;
border-radius: 12px;
box-shadow:
0 8px 25px rgba(0,0,0,0.1),
inset 0 1px 0 rgba(255,255,255,0.5);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
min-height: 80px;
padding: 8px 12px;
width: 100%;
box-sizing: border-box;
transition: transform 0.2s ease;
}

#aboutMeContent .content-wrapper {
    align-items: stretch;
    text-align: left;
    padding-left: 14px;
    padding-right: 14px;
}

#connectContent .connect-section {
    align-items: stretch;
    text-align: left;
    padding-left: 14px;
    padding-right: 14px;
}

/* Efek hover halus pada konten */
#aboutMeContent .content-wrapper:hover,
#connectContent .connect-section:hover {
transform: translateY(-1px);
box-shadow:
0 10px 25px rgba(0,0,0,0.15),
inset 0 1px 0 rgba(255,255,255,0.5);
}

.connect-title {
margin-top: 6px;
margin-bottom: 8px;
color: #062654;
font-size: 1.1em;
font-weight: 600;
}

/* ====== GRID IKON SOSIAL ====== */
.social-grid {
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 8px;
justify-items: center;
padding: 6px 0;
}

.social-btn {
width: 40px;
height: 40px;
background: linear-gradient(135deg, #1e4d8e, #4e9ed8);
border: 1.8px solid #ffffff;
border-radius: 14px;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
position: relative;
overflow: hidden;
}

.social-btn::before {
content: '';
position: absolute;
top: 0;
left: -100%;
width: 100%;
height: 100%;
background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
transition: left 0.4s;
}

.social-btn:hover::before {
left: 100%;
}

.social-btn:hover {
transform: translateY(-2px) scale(1.08);
box-shadow: 0 8px 20px rgba(255, 255, 255, 0.4);
}

.social-btn img {
width: 20px;
height: 20px;
filter: invert(1) brightness(1.3);
transition: transform 0.2s ease;
}

.social-btn:hover img {
transform: scale(1.08);
}

/* ====== RESPONSIF - TAMPILAN MOBILE (UNTUK LAYAR < 600px) ====== */
@media (max-width: 599px) {
body {
    /* Ganti background untuk mobile */
    background: url("https://i.ibb.co.com/WNTgzQZz/df0a32c7b657361b6a2a54872eb53299.webp") no-repeat center center/cover; /* Ganti URL ini dengan gambar mobile kamu */
    background-attachment: scroll; /* Biarkan background scroll di mobile untuk performa */
    /* Padding di body dihapus untuk mobile juga karena kontainer di tengah */
    padding: 0;
}
/* Gaya kontainer dan elemen lainnya tetap seperti yang ditetapkan sebelum media query */
/* Kita bisa menyesuaikan sedikit jika perlu */
.container {
    width: 90%;
    max-width: 100%;
    padding: 10px;
}

.profile-img {
    width: 80px;
    height: 80px;
}

.title {
    font-size: 1.8em;
    margin-bottom: 6px;
}

.btn {
    font-size: 14px;
    padding: 7px 12px;
    margin: 3px 0;
}

.btn-indicator {
    font-size: 13px;
}

.hidden-content .content-wrapper,
.hidden-content .connect-section {
    font-size: 12px;
    min-height: 70px;
    padding: 6px 10px;
    padding-left: 12px;
    padding-right: 12px;
}

.connect-title {
    font-size: 1em;
    margin-bottom: 6px;
}

.social-grid {
    gap: 7px;
    padding: 5px 0;
}

.social-btn {
    width: 36px;
    height: 36px;
}

.social-btn img {
    width: 18px;
    height: 18px;
}
}

/* ====== RESPONSIF - TAMPILAN DESKTOP (UNTUK LAYAR >= 600px) ====== */
@media (min-width: 600px) {
body {
    /* Padding di body dihapus untuk desktop juga karena kontainer di tengah */
    padding: 0;
}

.container {
    /* Gaya desktop */
    padding: 15px;
    width: 80%;
    max-width: 450px;
}

.profile-img {
    width: 100px;
    height: 100px;
}

.title {
    font-size: 2.2em;
    margin-bottom: 10px;
}

.btn {
    font-size: 16px;
    padding: 10px 16px;
    margin: 5px 0;
}

.btn-indicator {
    font-size: 15px;
}

.hidden-content .content-wrapper,
.hidden-content .connect-section {
    font-size: 14px;
    min-height: 90px;
    padding: 10px 14px;
    padding-left: 16px;
    padding-right: 16px;
}

.connect-title {
    font-size: 1.2em;
    margin-bottom: 10px;
}

.social-grid {
    gap: 10px;
    padding: 8px 0;
}

.social-btn {
    width: 44px;
    height: 44px;
}

.social-btn img {
    width: 22px;
    height: 22px;
}
}