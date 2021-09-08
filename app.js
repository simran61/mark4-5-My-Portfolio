
		const hamburger = document.querySelector(".hamburger");
		const navMenu = document.querySelector(".nav-menu");

		hamburger.addEventListener("click", mobileMenu);

		function mobileMenu() {
			hamburger.classList.toggle("active");
			navMenu.classList.toggle("active");
		}

		const navLink = document.querySelectorAll(".menu");

		navLink.forEach(n => n.addEventListener("click", closeMenu));

		function closeMenu() {
			hamburger.classList.remove("active");
			navMenu.classList.remove("active");
		}

		var scroll = new SmoothScroll('a[href*="#"]', {
			speed: 1000,
			speedAsDuration: true
		});

