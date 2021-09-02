(function() {
    const button = document.querySelector(".burger-button");
    const nav = document.querySelector(".burger-nav");
    button.onclick = toggleHandler;

    const links = document.querySelectorAll(".burger-nav li a");
    for (const link of links) {
        link.addEventListener("click", clickHandler);
        link.addEventListener("click", toggleHandler);
    }

    const arrowBtn = document.querySelector(".arrow-button");
    arrowBtn.addEventListener("click", clickHandler);

    const footerLinks = document.querySelectorAll(".footer-nav li a");
    for (const footerLink of footerLinks) {
        footerLink.addEventListener("click", clickHandler);
    }

    function toggleHandler(e) {
        e.preventDefault();
        button.classList.toggle("show");
        nav.classList.toggle("show");
        if (nav.classList.contains("show")) {
            document.removeEventListener("click", clickOutsideHandler);
            setTimeout(function () {
                document.addEventListener("click", clickOutsideHandler);
            }, 500);
        }
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth",
        });
    }

    function clickOutsideHandler(e) {
        e.preventDefault();
        const clickedElement = e.target;
        if (clickedElement.closest(".burger-nav") === null) {
            button.classList.remove("show");
            nav.classList.remove("show");
        }
        document.removeEventListener("click", clickOutsideHandler);
    }
})();