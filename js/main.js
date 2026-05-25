document.addEventListener('DOMContentLoaded', function () {

    // Mobile menu toggle
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
        });
    });

    // Scroll animations
    var fadeElements = document.querySelectorAll(
        '.class-card, .session-card, .feature-card, .review-card, .info-card, .review-form-wrapper'
    );

    fadeElements.forEach(function (el) {
        el.classList.add('fade-in');
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(function (el) {
        observer.observe(el);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Star rating
    var stars = document.querySelectorAll('#starRating .star');
    var selectedRating = 0;

    stars.forEach(function (star) {
        star.addEventListener('click', function () {
            selectedRating = parseInt(this.getAttribute('data-value'));
            stars.forEach(function (s) {
                var val = parseInt(s.getAttribute('data-value'));
                if (val <= selectedRating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });

        star.addEventListener('mouseenter', function () {
            var hoverVal = parseInt(this.getAttribute('data-value'));
            stars.forEach(function (s) {
                var val = parseInt(s.getAttribute('data-value'));
                if (val <= hoverVal) {
                    s.style.color = '#d4a853';
                } else {
                    s.style.color = '#ddd';
                }
            });
        });
    });

    document.getElementById('starRating').addEventListener('mouseleave', function () {
        stars.forEach(function (s) {
            var val = parseInt(s.getAttribute('data-value'));
            if (val <= selectedRating) {
                s.style.color = '#d4a853';
            } else {
                s.style.color = '#ddd';
            }
        });
    });

    // Review form submission
    var reviewForm = document.getElementById('reviewForm');
    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = reviewForm.querySelector('button[type="submit"]');
        btn.textContent = 'Review Submitted! Thank you!';
        btn.style.background = '#059669';
        setTimeout(function () {
            btn.textContent = 'Submit Review';
            btn.style.background = '';
            reviewForm.reset();
            selectedRating = 0;
            stars.forEach(function (s) {
                s.classList.remove('active');
                s.style.color = '#ddd';
            });
        }, 3000);
    });

    // Booking form submission
    var bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = bookingForm.querySelector('button[type="submit"]');
        btn.textContent = 'Booking Submitted! We\'ll contact you soon.';
        btn.style.background = '#059669';
        setTimeout(function () {
            btn.textContent = 'Book My Class — €40';
            btn.style.background = '';
            bookingForm.reset();
        }, 3000);
    });

});
