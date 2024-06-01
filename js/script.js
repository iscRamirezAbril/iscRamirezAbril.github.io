/* |===============| Toggle Icon Navbar |===============| */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* |===============| Scroll sections active link |===============| */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        };
    });

    /* |===============| Sticky Navbar |===============| */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)

    /* |===============| Remove toggle icon and navbar when click navbar link (scroll) |===============| */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* |===============| Scroll Reveal |===============| */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .subtitle, form', { origin: 'top' });
ScrollReveal().reveal('.profile-pic, .skills-row, .title, .projects-content, .home-content h1, .awards-section, .certificate-section', { origin: 'left' });
ScrollReveal().reveal('.education-row, .home-content p', { origin: 'right' });

/* |===============| Type Js |===============| */
const typed = new Typed('.multiple-text', {
    strings: ['UI/UX Designer', 'C# Developer', 'Frontend Developer','Project Manager'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* |===============| SmtpJS |===============| */
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "abrilramirezf01@gmail.com",
        Password: "89E122E887DD24740C0A683F245532A1BC30",
        To: 'isc.ramirez_abril@outlook.com',
        From: "isc.ramirez_abril@outlook.com",
        Subject: subject.value,
        Body: bodyMessage,
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    const items = document.querySelectorAll(".item");
    const message = document.getElementById("message");

    function checkInputs() {
        for (const item of items) {
            if (item.value == "") {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            } else {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
        }

        if (message.value == "") {
            message.classList.add("error");
            message.parentElement.classList.add("error");
        } else {
            message.classList.remove("error");
            message.parentElement.classList.remove("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }
    }

    function checkEmail() {
        const email = document.getElementById("email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value)) {
            email.classList.add("error");
            email.parentElement.classList.add("error");
        } else {
            email.classList.remove("error");
            email.parentElement.classList.remove("error");
        }
    }

    function sendEmail() {
        const fullName = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const bodyMessage = `Full Name: ${fullName}<br>Email: ${email}<br>Phone Number: ${phone}<br>Message: ${message}`;

        console.log("Sending email...");

        Email.send({
            SecureToken: "7d979b95-a454-473e-8047-686d561d19bf",
            To: 'abrilramirezf01@gmail.com',
            From: "abrilramirezf01@gmail.com",
            Subject: subject,
            Body: bodyMessage,
        }).then(
            message => {
                console.log("Email send response:", message);
                if (message == "OK") {
                    Swal.fire({
                        title: "Success!",
                        text: "Message sent successfully!",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Message failed to send.",
                        icon: "error"
                    });
                }
            }
        ).catch(error => {
            console.error("Error sending email:", error);
            Swal.fire({
                title: "Error!",
                text: "There was an error sending your message.",
                icon: "error"
            });
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInputs();

        if (document.querySelectorAll('.error').length === 0) {
            sendEmail();
        } else {
            Swal.fire({
                title: "Error!",
                text: "Please fill out all fields correctly.",
                icon: "error"
            });
        }
    });

    items.forEach(item => {
        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }

            if (item.id === "email") {
                checkEmail();
            }
        });
    });

    message.addEventListener("keyup", () => {
        if (message.value != "") {
            message.classList.remove("error");
            message.parentElement.classList.remove("error");
        } else {
            message.classList.add("error");
            message.parentElement.classList.add("error");
        }
    });
});