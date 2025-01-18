document.getElementById("aboutMeButton").addEventListener("click", function () {
    const aboutMeContent = document.getElementById("aboutMeContent");
    const connectContent = document.getElementById("connectContent");
    if (aboutMeContent.style.display === "block") {
        aboutMeContent.style.display = "none";
    } else {
        aboutMeContent.style.display = "block";
        connectContent.style.display = "none";
    }
});

document.getElementById("connectButton").addEventListener("click", function () {
    const connectContent = document.getElementById("connectContent");
    const aboutMeContent = document.getElementById("aboutMeContent");
    if (connectContent.style.display === "block") {
        connectContent.style.display = "none";
    } else {
        connectContent.style.display = "block";
        aboutMeContent.style.display = "none";
    }
});