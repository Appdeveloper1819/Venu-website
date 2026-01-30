(function () {
    //===== Preloader
    window.onload = function () {
        window.setTimeout(fadeout, 500);
    };

    function fadeout() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.display = 'none';
        }
    }

    //===== Sticky Navbar and Back-to-Top Button
    window.onscroll = function () {
        const header_navbar = document.querySelector(".navbar-area");
        const backToTop = document.querySelector(".scroll-top");

        if (header_navbar) {
            if (window.pageYOffset > header_navbar.offsetTop) {
                header_navbar.classList.add("sticky");
            } else {
                header_navbar.classList.remove("sticky");
            }
        }

        if (backToTop) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                backToTop.style.display = "flex";
            } else {
                backToTop.style.display = "none";
            }
        }
    };

    //===== Smooth Scroll for Menu Links
    const pageLinks = document.querySelectorAll('.page-scroll');
    pageLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    //===== Section Menu Active
    function onScroll() {
        const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        pageLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section) {
                const offsetTop = section.offsetTop;
                const offsetBottom = offsetTop + section.offsetHeight;

                if (scrollPos >= offsetTop - 74 && scrollPos < offsetBottom - 74) {
                    pageLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }
    document.addEventListener('scroll', onScroll);

    //===== Collapse Navbar on Link Click (Mobile)
    // const navbarToggler = document.querySelector(".navbar-toggler");
    // const navbarCollapse = document.querySelector(".navbar-collapse");

    // pageLinks.forEach(link => {
    //     link.addEventListener("click", () => {
    //         navbarToggler?.classList.remove("active");
    //         navbarCollapse?.classList.remove("show");
    //     });
    // });

    // navbarToggler?.addEventListener('click', () => {
    //     navbarToggler.classList.toggle("active");
    // });

    //===== WOW.js Initialization
    if (typeof WOW === 'function') {
        new WOW().init();
    }

})();
