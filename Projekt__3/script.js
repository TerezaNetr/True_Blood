window.onload = function() {
    let themeSwitcher = document.getElementById('theme-switcher');
    let registrationForm = document.getElementById('registrationForm');
    let backToTop = document.getElementById('back-to-top');

    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', function() {
            let body = document.body;
            let navbar = document.getElementById('navbar');
            let navItems = document.querySelectorAll('#nav-items a');
            let sections = document.querySelectorAll('.photos, .motto, .team, .services, .partners, footer, .history');
            let elements = document.querySelectorAll('.history__box, .team__employee, .services__box, .photos img, .team__employee img, .team__employee p, .partners img, .partners form, .partners div');

            body.classList.toggle('dark-mode');

            if (navbar) {
                navbar.classList.toggle('dark-mode');
            }

            navItems.forEach(function(item) {
                item.classList.toggle('dark-mode');
            });

            sections.forEach(function(section) {
                section.classList.toggle('dark-mode');
            });

            elements.forEach(function(element) {
                element.classList.toggle('dark-mode');
            });
        });
    }

const formular = document.querySelector("#registrationForm")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmPassword")
const notification = document.createElement("p");

notification.style.display = "none";
notification.style.color = "#db0000";
notification.textContent = "Hesla se neshodují";
formular.insertBefore(notification, formular.childNodes[0]);

password.addEventListener('input', function (event) {
   if (password.value !== confirmPassword.value) {
       notification.style.display = "block";
   } else {
       notification.style.display = "none";
   }
});

confirmPassword.addEventListener('input', function (event) {
   if (password.value !== confirmPassword.value) {
       notification.style.display = "block";
   } else {
       notification.style.display = "none";
   }
});

    if (backToTop) {
        backToTop.style.display = 'none';

        window.onscroll = function() {
          if (window.scrollY > 150) {
            backToTop.style.display = 'block';
          } else {
            backToTop.style.display = 'none';
          }
        };

        backToTop.onclick = function() {
          window.scrollTo(0, 0);
        };
    }
};

