document.addEventListener("DOMContentLoaded", () => {
    const aboutBtn = document.getElementById("aboutMeButton");
    const connectBtn = document.getElementById("connectButton");
    const aboutContent = document.getElementById("aboutMeContent");
    const connectContent = document.getElementById("connectContent");
    const container = document.querySelector(".container");

    [aboutContent, connectContent].forEach(content => {
        content.classList.remove("active", "closing");
        content.style.visibility = "hidden";
        content.style.maxHeight = "0";
        content.style.transform = "scaleY(0)";
        content.setAttribute('hidden', 'true');
    });

    function updateAriaAttributes(button, isExpanded) {
        button.setAttribute("aria-expanded", isExpanded);
    }

    function hasActiveContent() {
        return aboutContent.classList.contains("active") || connectContent.classList.contains("active");
    }

    function closeSection(button, content) {
        if (!content.classList.contains("active")) return;

        content.classList.remove("active");
        content.classList.add("closing");
        updateAriaAttributes(button, false);

        content.style.maxHeight = content.scrollHeight + "px";
        void content.offsetWidth;
        content.style.maxHeight = "0";
        content.style.transform = "scaleY(0)";

        content.addEventListener("transitionend", function onTransitionEnd(e) {
            if (e.propertyName === 'max-height' || e.propertyName === 'transform') {
                content.classList.remove("closing");
                content.style.visibility = "hidden";
                content.setAttribute('hidden', 'true');
                content.style.overflow = '';
                if (!hasActiveContent()) {
                    container.classList.remove("accordion-open");
                }
                content.removeEventListener("transitionend", onTransitionEnd);
            }
        }, { once: true });

        button.classList.remove("active");
    }

    function openSection(button, content) {
        if (aboutContent !== content && aboutContent.classList.contains("active")) {
            closeSection(aboutBtn, aboutContent);
        }
        if (connectContent !== content && connectContent.classList.contains("active")) {
            closeSection(connectBtn, connectContent);
        }

        content.style.visibility = "visible";
        content.removeAttribute('hidden');
        content.classList.add("active");
        button.classList.add("active");
        updateAriaAttributes(button, true);

        content.style.overflow = 'hidden';
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.transform = "scaleY(1)";
        void content.offsetWidth;
        content.style.maxHeight = content.scrollHeight + "px";

        container.classList.add("accordion-open");
    }

    function toggleSection(button, content) {
        if (content.classList.contains("active")) {
            closeSection(button, content);
        } else {
            openSection(button, content);
        }
    }

    aboutBtn.addEventListener("click", e => {
        e.stopPropagation();
        toggleSection(aboutBtn, aboutContent);
    });

    connectBtn.addEventListener("click", e => {
        e.stopPropagation();
        toggleSection(connectBtn, connectContent);
    });

    document.addEventListener("click", e => {
        if (!container.contains(e.target)) {
            [[aboutBtn, aboutContent], [connectBtn, connectContent]].forEach(([btn, content]) => {
                closeSection(btn, content);
            });
        }
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            [[aboutBtn, aboutContent], [connectBtn, connectContent]].forEach(([btn, content]) => {
                closeSection(btn, content);
            });
        }
    });

    window.addEventListener("resize", () => {
        [aboutContent, connectContent].forEach(content => {
            if (content.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});