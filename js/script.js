/*!
 * Generated using the Bootstrap Customizer (<none>)
 * Config saved to config.json and <none>
 */

(function ($) {

	"use strict";

	// ------------------------------------------------------------------------------ //
	// Overlay Menu Navigation
	// ------------------------------------------------------------------------------ //
	var overlayMenu = function () {

		if (!$('.nav-overlay').length) {
			return false;
		}

		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-btn');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
		};
		init();
	}

	// init jarallax parallax
	var initJarallax = function () {
		jarallax(document.querySelectorAll(".jarallax"));

		jarallax(document.querySelectorAll(".jarallax-keep-img"), {
			keepImg: true,
		});
	}

	// init Chocolat light box
	var initChocolat = function () {
		Chocolat(document.querySelectorAll('.image-link'), {
			imageSize: 'contain',
			loop: true,
		})
	}

	var initSwiper = function () {

		var swiper = new Swiper(".portfolio-carousel", {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			navigation: {
				nextEl: ".portfolio-carousel-next",
				prevEl: ".portfolio-carousel-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				599: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				980: {
					slidesPerView: 3,
					spaceBetween: 5,
				},
			},
		});

		var testimonial_swiper = new Swiper(".testimonial-carousel", {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				980: {
					slidesPerView: 3,
					spaceBetween: 5,
				},
			},
		});

		var clients_swiper = new Swiper(".clients-carousel", {
			slidesPerView: 5,
			spaceBetween: 30,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			breakpoints: {
				0: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				980: {
					slidesPerView: 5,
					spaceBetween: 5,
				},
			},
		});

		// Featured projects carousel
		var featured_swiper = new Swiper(".featured-carousel", {
			slidesPerView: 3,
			spaceBetween: 20,
			loop: true,
			navigation: {
				nextEl: ".featured-carousel-next",
				prevEl: ".featured-carousel-prev",
			},
			pagination: {
				el: ".featured-pagination",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				600: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
		});
	}

function initIsotope() {
	// Initialize Isotope
	var $container = $('.isotope-container').isotope({
			itemSelector: '.item',
			layoutMode: 'masonry'
		});

		/* ---------------- Draggable Modal for .aj-tiles ---------------- */
		(function() {
			const modal = document.getElementById('ajModal');
			const modalHeader = document.getElementById('ajModalHeader');
			const modalClose = document.getElementById('ajModalClose');
			const modalBody = document.getElementById('ajModalBody');
			const modalTitle = document.getElementById('ajModalTitle');
			if (!modal) return;

			function showModal(title, content) {
				modalTitle.textContent = title || '';
				modalBody.innerHTML = content || '';
				modal.style.display = 'block';
				modal.setAttribute('aria-hidden', 'false');
				// ensure modal is on top and roughly centered
				modal.style.zIndex = 9999;
				modal.style.left = Math.max(8, (window.innerWidth - modal.offsetWidth) / 2) + 'px';
				modal.style.top = Math.max(8, (window.innerHeight - modal.offsetHeight) / 2) + 'px';
			}

			function closeModal() {
				modal.style.display = 'none';
				modal.setAttribute('aria-hidden', 'true');
			}

			modalClose && modalClose.addEventListener('click', closeModal);
			document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

			// make modal draggable by header
			(function() {
				let dragging = false, offsetX = 0, offsetY = 0;
				modalHeader && (modalHeader.style.touchAction = 'none');

				modalHeader && modalHeader.addEventListener('pointerdown', function(ev) {
				// Don't start dragging if clicking the close button
				if (ev.target.id === 'ajModalClose' || ev.target.classList.contains('aj-modal-close') || ev.target.closest('.aj-modal-close')) {
					return;
				}
					dragging = true;
					try { modal.setPointerCapture(ev.pointerId); } catch (e) {}
					const rect = modal.getBoundingClientRect();
					offsetX = ev.clientX - rect.left;
					offsetY = ev.clientY - rect.top;
					modal.classList.add('dragging');
				});

				document.addEventListener('pointermove', function(ev) {
					if (!dragging) return;
					const left = Math.max(8, Math.min(ev.clientX - offsetX, window.innerWidth - modal.offsetWidth - 8));
					const top = Math.max(8, Math.min(ev.clientY - offsetY, window.innerHeight - modal.offsetHeight - 8));
					modal.style.left = left + 'px';
					modal.style.top = top + 'px';
				});

				document.addEventListener('pointerup', function(ev) {
					if (!dragging) return;
					dragging = false;
					try { modal.releasePointerCapture && modal.releasePointerCapture(ev.pointerId); } catch (e) {}
					modal.classList.remove('dragging');
				});
			})();

			// Tiles open the modal with custom content
			const tiles = document.querySelectorAll('.aj-tile');
				tiles.forEach(function(tile, idx) {
					tile.addEventListener('click', function(e) {
					// prefer explicit aria-label or visible text for the modal title
					const title = (tile.getAttribute && tile.getAttribute('aria-label')) || (tile.textContent && tile.textContent.trim()) || ('Tile ' + (idx + 1));
					let content = '';
					if (idx === 0) {
						content = '<p>i\'ve been drawing since I was 5 years old and i do commission work too!</p><p>i love drawing cute things and bringing people\'s ideas to life :)</p>';
					} else if (idx === 1) {
						content = '<p>Check out my featured section below!</p>';
					} else {
					content = `
						<div style="max-height: 60vh; overflow-y: auto; padding-right: 8px;">
							<h3 style="margin-top: 0; margin-bottom: 20px; color: #333;">FAQ</h3>
							<div style="margin-bottom: 20px;">
								<p style="font-weight: 600; margin-bottom: 8px; color: #555;">Q: What kinds of projects do you usually work on?</p>
								<p style="margin-left: 16px; color: #666;">A: Mostly web apps, dashboards, computer vision tools, and small games.</p>
							</div>
							<div style="margin-bottom: 20px;">
								<p style="font-weight: 600; margin-bottom: 8px; color: #555;">Q: What programming languages and tools do you use?</p>
								<p style="margin-left: 16px; color: #666;">A: I usually work with JavaScript, HTML, and CSS for front-end. I also use Python for scripting, data-related stuff, and bigger projects. I also use tools like React or Next.js for interfaces, and libraries like OpenCV for real-time input.</p>
							</div>
							<div style="margin-bottom: 20px;">
								<p style="font-weight: 600; margin-bottom: 8px; color: #555;">Q: Are you more into front-end or back-end?</p>
								<p style="margin-left: 16px; color: #666;">A: Definitely more front-end right now. I enjoy UI/UX, layout, interactions, and making things feel nice to use, but I'm building my back-end skills alongside that.</p>
							</div>
							<div style="margin-bottom: 20px;">
								<p style="font-weight: 600; margin-bottom: 8px; color: #555;">Q: What roles are you looking for?</p>
								<p style="margin-left: 16px; color: #666;">A: Software engineering, product or UI/UX, and data analysis roles. I enjoy building systems that collect and interpret data, then turning that into interfaces people can actually understand and use.</p>
							</div>
							<div style="margin-bottom: 20px;">
								<p style="font-weight: 600; margin-bottom: 8px; color: #555;">Q: Do you work with data and machine learning?</p>
								<p style="margin-left: 16px; color: #666;">A: Yes. I have worked on projects that analyze large datasets, build predictive models, and visualize trends. I really enjoy this!</p>
							</div>
							<div style="margin-bottom: 20px;">
								<p style="font-weight: 600; margin-bottom: 8px; color: #555;">Q: What tools do you use for art and design?</p>
								<p style="margin-left: 16px; color: #666;">A: I mostly draw digitally using an iPad with Procreate for designs. I also use Figma, Photoshop, and Illustrator depending on the project.</p>
							</div>
							<div style="margin-bottom: 20px;">
								<p style="font-weight: 600; margin-bottom: 8px; color: #555;">Q: Do you take freelance or commission work?</p>
								<p style="margin-left: 16px; color: #666;">A: Yes! I am open to commissions for illustration, design, and small software or web projects. My work email is: <a href="mailto:juliezhouxt@gmail.com" style="color: #007bff; text-decoration: none;">juliezhouxt@gmail.com</a>.</p>
							</div>
							<div style="margin-bottom: 20px;">
								<p style="font-weight: 600; margin-bottom: 8px; color: #555;">Q: Are you open to learning new tools or languages?</p>
								<p style="margin-left: 16px; color: #666;">A: Definitely! Most of my favorite projects started with me learning something new from scratch, and I enjoy that process a lot!</p>
							</div>
						</div>
					`;
					}
					showModal(title, content);
				});
			});
		})();
}

$(document).ready(function () {
	overlayMenu();

	AOS.init({
		duration: 1000,
		once: true,
		offset: 50,
		easing: 'ease-out-cubic'
	});

	// Prevent browser from restoring previous scroll position on navigation
	try {
		if ('scrollRestoration' in history) {
			history.scrollRestoration = 'manual';
		}
	} catch (e) { /* ignore in older browsers */ }

	// Initialize Swiper carousels on DOM ready
	initSwiper();

	// Initialize isotope after all images are loaded
	$(window).on('load', function() {

			// Fade out preloader
            $("#overlayer").fadeOut("slow");
            $('body').addClass('loaded');
            initIsotope();
			// Refresh AOS after everything (images/layout) has finished loading so animations trigger correctly
			if (window.AOS && typeof AOS.refresh === 'function') {
				AOS.refresh();
			}

			// Ensure we are at the very top after load (some browsers restore scroll)
			try {
				window.scrollTo && window.scrollTo(0, 0);
				// remove focus from any focused element that might push scroll
				if (document.activeElement && typeof document.activeElement.blur === 'function') {
					document.activeElement.blur();
				}
			} catch (e) { /* ignore */ }
        });

		/* Fallback modal initializer: attach tile handlers on DOM ready so clicks work even if isotope/initIsotope fails */
		(function() {
			const modal = document.getElementById('ajModal');
			if (!modal) return;
			const modalHeader = document.getElementById('ajModalHeader');
			const modalClose = document.getElementById('ajModalClose');
			const modalBody = document.getElementById('ajModalBody');
			const modalTitle = document.getElementById('ajModalTitle');

			function showModal(title, content) {
				modalTitle.textContent = title || '';
				modalBody.innerHTML = content || '';
				modal.style.display = 'block';
				modal.setAttribute('aria-hidden', 'false');
				modal.style.zIndex = 9999;
				// center if not positioned yet
				if (!modal.style.left || !modal.style.top) {
					modal.style.left = Math.max(8, (window.innerWidth - modal.offsetWidth) / 2) + 'px';
					modal.style.top = Math.max(8, (window.innerHeight - modal.offsetHeight) / 2) + 'px';
				}
			}

			function closeModal() {
				modal.style.display = 'none';
				modal.setAttribute('aria-hidden', 'true');
			}

			modalClose && modalClose.addEventListener('click', closeModal);
			document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

			// draggable by header (pointer events)
			if (modalHeader) {
				modalHeader.style.touchAction = 'none';
				let dragging = false, offsetX = 0, offsetY = 0;
				modalHeader.addEventListener('pointerdown', function(ev) {
				// Don't start dragging if clicking the close button
				if (ev.target.id === 'ajModalClose' || ev.target.classList.contains('aj-modal-close') || ev.target.closest('.aj-modal-close')) {
					return;
				}
					dragging = true;
					try { modal.setPointerCapture(ev.pointerId); } catch (e) {}
					const rect = modal.getBoundingClientRect();
					offsetX = ev.clientX - rect.left;
					offsetY = ev.clientY - rect.top;
					modal.classList.add('dragging');
				});

				document.addEventListener('pointermove', function(ev) {
					if (!dragging) return;
					const left = Math.max(8, Math.min(ev.clientX - offsetX, window.innerWidth - modal.offsetWidth - 8));
					const top = Math.max(8, Math.min(ev.clientY - offsetY, window.innerHeight - modal.offsetHeight - 8));
					modal.style.left = left + 'px';
					modal.style.top = top + 'px';
				});

				document.addEventListener('pointerup', function(ev) {
					if (!dragging) return;
					dragging = false;
					try { modal.releasePointerCapture && modal.releasePointerCapture(ev.pointerId); } catch (e) {}
					modal.classList.remove('dragging');
				});
			}

			// attach tile handlers (guard against double-binding)
			const tiles = document.querySelectorAll('.aj-tile');
			tiles.forEach(function(tile, idx) {
				if (tile.dataset.modalBound === '1') return;
				tile.dataset.modalBound = '1';
				tile.addEventListener('click', function() {
					// prefer aria-label/text so modal title matches tile label
					const title = (tile.getAttribute && tile.getAttribute('aria-label')) || (tile.textContent && tile.textContent.trim()) || ('Tile ' + (idx + 1));
					let content = '';
		if (idx === 0) {
 		 content = `<p>
  		  i’ve been drawing for 6-7 years and do commission work too!
  		  i love drawing cute things and bringing people’s ideas to life :)
 		 </p>`;
}
					else if (idx === 1) content = '<p>Check out my featured projects section!</p>';
				else content = `
					<div style="max-height: 60vh; overflow-y: auto; padding-right: 12px; line-height: 1.6;">
						<h3 style="margin-top: 0; margin-bottom: 24px; color: #8b5cf6; font-size: 24px; border-bottom: 2px solid #8b5cf6; padding-bottom: 8px;">Frequently Asked Questions</h3>
						<div style="margin-bottom: 24px; padding-left: 12px; border-left: 3px solid #e9d5ff;">
							<p style="font-weight: 700; margin-bottom: 10px; color: #8b5cf6; font-size: 16px;">Q: What kinds of projects do you usually work on?</p>
							<p style="margin-left: 16px; color: #4a5568;">A: Mostly <strong>web apps</strong>, <strong>dashboards</strong>, <strong>computer vision tools</strong>, and <strong>small games</strong>.</p>
						</div>
						<div style="margin-bottom: 24px; padding-left: 12px; border-left: 3px solid #e9d5ff;">
							<p style="font-weight: 700; margin-bottom: 10px; color: #8b5cf6; font-size: 16px;">Q: What programming languages and tools do you use?</p>
							<p style="margin-left: 16px; color: #4a5568;">A: I usually work with <strong>JavaScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong> for front-end. I also use <strong>Python</strong> for scripting, data-related stuff, and bigger projects. I also use tools like <strong>React</strong> or <strong>Next.js</strong> for interfaces, and libraries like <strong>OpenCV</strong> for real-time input.</p>
						</div>
						<div style="margin-bottom: 24px; padding-left: 12px; border-left: 3px solid #e9d5ff;">
							<p style="font-weight: 700; margin-bottom: 10px; color: #8b5cf6; font-size: 16px;">Q: Are you more into front-end or back-end?</p>
							<p style="margin-left: 16px; color: #4a5568;">A: Definitely more <strong>front-end</strong> right now. I enjoy <strong>UI/UX</strong>, layout, interactions, and making things feel nice to use, but I'm building my back-end skills alongside that.</p>
						</div>
						<div style="margin-bottom: 24px; padding-left: 12px; border-left: 3px solid #e9d5ff;">
							<p style="font-weight: 700; margin-bottom: 10px; color: #8b5cf6; font-size: 16px;">Q: What roles are you looking for?</p>
							<p style="margin-left: 16px; color: #4a5568;">A: <strong>Software engineering</strong> and <strong>product</strong> or <strong>UI/UX roles</strong>. I like working on things where code and design come together and the end result actually feels good to use.</p>
						</div>
						<div style="margin-bottom: 24px; padding-left: 12px; border-left: 3px solid #e9d5ff;">
							<p style="font-weight: 700; margin-bottom: 10px; color: #8b5cf6; font-size: 16px;">Q: Do you work with data and machine learning?</p>
							<p style="margin-left: 16px; color: #4a5568;">A: <strong>Yes</strong>. I have worked on projects that analyze <strong>large datasets</strong>, build <strong>predictive models</strong>, and visualize trends. I really enjoy this!</p>
						</div>
						<div style="margin-bottom: 24px; padding-left: 12px; border-left: 3px solid #e9d5ff;">
							<p style="font-weight: 700; margin-bottom: 10px; color: #8b5cf6; font-size: 16px;">Q: What tools do you use for art and design?</p>
							<p style="margin-left: 16px; color: #4a5568;">A: I mostly draw digitally using an <strong>iPad</strong> with <strong>Procreate</strong> for designs. I also use <strong>Figma</strong>, <strong>Photoshop</strong>, and <strong>Illustrator</strong> depending on the project.</p>
						</div>
						<div style="margin-bottom: 24px; padding-left: 12px; border-left: 3px solid #e9d5ff;">
							<p style="font-weight: 700; margin-bottom: 10px; color: #8b5cf6; font-size: 16px;">Q: Do you take freelance or commission work?</p>
							<p style="margin-left: 16px; color: #4a5568;">A: <strong>Yes!</strong> I am open to commissions for <strong>illustration</strong>, <strong>design</strong>, and small <strong>software</strong> or <strong>web projects</strong>. My work email is: <a href="mailto:juliezhouxt@gmail.com" style="color: #8b5cf6; text-decoration: none; font-weight: 600; border-bottom: 2px solid #e9d5ff;">juliezhouxt@gmail.com</a>.</p>
						</div>
						<div style="margin-bottom: 24px; padding-left: 12px; border-left: 3px solid #e9d5ff;">
							<p style="font-weight: 700; margin-bottom: 10px; color: #8b5cf6; font-size: 16px;">Q: Are you open to learning new tools or languages?</p>
							<p style="margin-left: 16px; color: #4a5568;">A: <strong>Definitely!</strong> Most of my favorite projects started with me learning something new from scratch, and I enjoy that process a lot!</p>
						</div>
					</div>
				`;
					showModal(title, content);
				});
			});
		})();

		/* Contact button -> opens contact form inside the same draggable modal */
		(function(){
			const cButtons = document.querySelectorAll('.aj-mini-btn');
			if (!cButtons || cButtons.length === 0) return;

			function openContactModal() {
				const modal = document.getElementById('ajModal');
				const titleEl = document.getElementById('ajModalTitle');
				const bodyEl = document.getElementById('ajModalBody');
				if (!modal || !titleEl || !bodyEl) return;
				titleEl.textContent = 'Contact Julie';
				bodyEl.innerHTML = '\n\t\t\t<form id="ajContactForm" class="aj-contact-form">\n\t\t\t  <label for="contactEmail">Your email</label>\n\t\t\t  <input id="contactEmail" name="email" type="email" required placeholder="you@example.com">\n\t\t\t  <label for="contactMessage">Message</label>\n\t\t\t  <textarea id="contactMessage" name="message" rows="6" required placeholder="Write your message to Julie"></textarea>\n\t\t\t  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">\n\t\t\t    <button type="button" id="ajContactCancel" class="btn">Cancel</button>\n\t\t\t    <button type="submit" class="btn btn-primary">Send</button>\n\t\t\t  </div>\n\t\t\t</form>\n\t\t\t';
				modal.style.display = 'block';
				modal.setAttribute('aria-hidden','false');
				modal.style.zIndex = 99999;
				// center if not positioned yet
				if (!modal.style.left || !modal.style.top) {
					modal.style.left = Math.max(8, (window.innerWidth - modal.offsetWidth) / 2) + 'px';
					modal.style.top = Math.max(8, (window.innerHeight - modal.offsetHeight) / 2) + 'px';
				}

				// attach handlers for the form
				const form = document.getElementById('ajContactForm');
				const cancel = document.getElementById('ajContactCancel');
				if (cancel) cancel.addEventListener('click', function(){ modal.style.display='none'; modal.setAttribute('aria-hidden','true'); });

				if (form) {
					form.addEventListener('submit', function(ev){
						ev.preventDefault();
						const from = (form.querySelector('input[name="email"]')||{}).value || '';
						const message = (form.querySelector('textarea[name="message"]')||{}).value || '';
						if (!from || !message) {
							alert('Please provide your email and a message.');
							return;
						}
						// If you have a server endpoint (recommended) set window.CONTACT_API_ENDPOINT to its URL
						// Example: window.CONTACT_API_ENDPOINT = 'https://formspree.io/f/yourformid';
						const endpoint = window.CONTACT_API_ENDPOINT || '';
						if (endpoint) {
							// send JSON POST to endpoint
							fetch(endpoint, {
								method: 'POST',
								headers: { 'Content-Type': 'application/json' },
								body: JSON.stringify({ email: from, message: message })
							}).then(function(res){
								if (res.ok) {
									bodyEl.innerHTML = '<p>Thanks — your message was sent.</p>';
									setTimeout(function(){ modal.style.display='none'; modal.setAttribute('aria-hidden','true'); }, 1200);
								} else {
									return res.text().then(function(t){ throw new Error(t || 'Send failed'); });
								}
							}).catch(function(err){
								console && console.error && console.error('Contact send failed', err);
								alert('Send failed. Opening your mail client as a fallback.');
								const subject = encodeURIComponent('Website message from ' + from);
								const body = encodeURIComponent(message + '\n\nReply to: ' + from);
								window.location.href = 'mailto:juliezhouxt@gmail.com?subject=' + subject + '&body=' + body;
								modal.style.display = 'none';
								modal.setAttribute('aria-hidden','true');
							});
						} else {
							// No server endpoint configured: fall back to mailto
							const subject = encodeURIComponent('Website message from ' + from);
							const body = encodeURIComponent(message + '\n\nReply to: ' + from);
							window.location.href = 'mailto:juliezhouxt@gmail.com?subject=' + subject + '&body=' + body;
							modal.style.display = 'none';
							modal.setAttribute('aria-hidden','true');
						}
					});
				}
			}

			cButtons.forEach(function(btn){
				if (btn.dataset.contactBound === '1') return;
				btn.dataset.contactBound = '1';
				btn.addEventListener('click', function(e){ e.preventDefault(); openContactModal(); });
			});
		})();

	/* ========== Theme Toggle (Light/Dark) ========== */
	(function() {
		var STORAGE_KEY = 'julie-theme';
		var html = document.documentElement;

		// Restore saved theme
		var saved = localStorage.getItem(STORAGE_KEY);
		if (saved === 'dark') {
			html.setAttribute('data-theme', 'dark');
		} else {
			html.removeAttribute('data-theme');
		}

		function updateActiveToggle() {
			var current = html.getAttribute('data-theme') || 'light';
			var lightBtn = document.getElementById('themeLight');
			var darkBtn = document.getElementById('themeDark');
			if (lightBtn) lightBtn.classList.toggle('theme-active', current === 'light');
			if (darkBtn) darkBtn.classList.toggle('theme-active', current === 'dark');
		}

		function setTheme(mode) {
			if (mode === 'dark') {
				html.setAttribute('data-theme', 'dark');
				localStorage.setItem(STORAGE_KEY, 'dark');
			} else {
				html.removeAttribute('data-theme');
				localStorage.setItem(STORAGE_KEY, 'light');
			}
			updateActiveToggle();
		}

		var lightBtn = document.getElementById('themeLight');
		var darkBtn = document.getElementById('themeDark');

		if (lightBtn) {
			lightBtn.addEventListener('click', function(e) {
				e.preventDefault();
				setTheme('light');
			});
		}
		if (darkBtn) {
			darkBtn.addEventListener('click', function(e) {
				e.preventDefault();
				setTheme('dark');
			});
		}

		updateActiveToggle();
	})();

	/* ========== Meteor Shower Animation (Canvas) ========== */
	(function() {
		var meteorCanvas = null;
		var meteorCtx = null;
		var meteors = [];
		var particles = [];
		var animationId = null;
		var running = false;
		var spawnPending = false;

		function createCanvas() {
			meteorCanvas = document.createElement('canvas');
			meteorCanvas.id = 'meteorCanvas';
			meteorCanvas.style.cssText =
				'position:fixed;top:0;left:0;width:100%;height:100%;z-index:99998;pointer-events:none;';
			meteorCanvas.width = window.innerWidth;
			meteorCanvas.height = window.innerHeight;
			document.body.appendChild(meteorCanvas);
			meteorCtx = meteorCanvas.getContext('2d');
		}

		function spawnMeteor() {
			var startX = Math.random() * meteorCanvas.width * 0.6 + meteorCanvas.width * 0.4;
			var startY = -50;
			var speed = 8 + Math.random() * 6;
			var angle = Math.PI * (0.55 + Math.random() * 0.2);

			return {
				x: startX,
				y: startY,
				vx: Math.cos(angle) * speed,
				vy: Math.sin(angle) * speed,
				length: 80 + Math.random() * 120,
				width: 1.5 + Math.random() * 2,
				opacity: 0.8 + Math.random() * 0.2,
				hue: 220 + Math.random() * 40,
				alive: true,
				exploded: false,
				explodeY: meteorCanvas.height * (0.4 + Math.random() * 0.35)
			};
		}

		function spawnExplosion(x, y, hue) {
			var count = 25 + Math.floor(Math.random() * 15);
			for (var i = 0; i < count; i++) {
				var a = Math.random() * Math.PI * 2;
				var spd = 2 + Math.random() * 6;
				particles.push({
					x: x, y: y,
					vx: Math.cos(a) * spd,
					vy: Math.sin(a) * spd,
					radius: 1 + Math.random() * 3,
					opacity: 1,
					hue: hue + Math.random() * 30 - 15,
					decay: 0.012 + Math.random() * 0.018
				});
			}
			// Add sparkle ring
			for (var j = 0; j < 12; j++) {
				var ra = (Math.PI * 2 / 12) * j;
				particles.push({
					x: x, y: y,
					vx: Math.cos(ra) * 8,
					vy: Math.sin(ra) * 8,
					radius: 0.8,
					opacity: 1,
					hue: hue + 40,
					decay: 0.03
				});
			}
		}

		function update() {
			meteorCtx.clearRect(0, 0, meteorCanvas.width, meteorCanvas.height);

			// Draw meteors
			for (var i = meteors.length - 1; i >= 0; i--) {
				var m = meteors[i];
				m.x += m.vx;
				m.y += m.vy;

				// Draw trail
				var tailX = m.x - m.vx * (m.length / 10);
				var tailY = m.y - m.vy * (m.length / 10);
				var gradient = meteorCtx.createLinearGradient(m.x, m.y, tailX, tailY);
				gradient.addColorStop(0, 'hsla(' + m.hue + ', 80%, 85%, ' + m.opacity + ')');
				gradient.addColorStop(0.3, 'hsla(' + m.hue + ', 70%, 65%, ' + (m.opacity * 0.6) + ')');
				gradient.addColorStop(1, 'hsla(' + m.hue + ', 60%, 40%, 0)');

				meteorCtx.save();
				meteorCtx.strokeStyle = gradient;
				meteorCtx.lineWidth = m.width;
				meteorCtx.lineCap = 'round';
				meteorCtx.beginPath();
				meteorCtx.moveTo(m.x, m.y);
				meteorCtx.lineTo(tailX, tailY);
				meteorCtx.stroke();

				// Bright head glow
				meteorCtx.beginPath();
				meteorCtx.arc(m.x, m.y, m.width * 3, 0, Math.PI * 2);
				var headGlow = meteorCtx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.width * 3);
				headGlow.addColorStop(0, 'hsla(' + m.hue + ', 90%, 95%, ' + (m.opacity * 0.8) + ')');
				headGlow.addColorStop(1, 'hsla(' + m.hue + ', 80%, 70%, 0)');
				meteorCtx.fillStyle = headGlow;
				meteorCtx.fill();
				meteorCtx.restore();

				// Explode check
				if (!m.exploded && m.y > m.explodeY) {
					m.exploded = true;
					spawnExplosion(m.x, m.y, m.hue);
					m.alive = false;
				}

				if (m.y > meteorCanvas.height + 100 || m.x < -100) {
					m.alive = false;
				}

				if (!m.alive) meteors.splice(i, 1);
			}

			// Draw particles
			for (var j = particles.length - 1; j >= 0; j--) {
				var p = particles[j];
				p.x += p.vx;
				p.y += p.vy;
				p.vy += 0.06; // gravity
				p.vx *= 0.99; // drag
				p.opacity -= p.decay;

				if (p.opacity <= 0) {
					particles.splice(j, 1);
					continue;
				}

				meteorCtx.beginPath();
				meteorCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
				meteorCtx.fillStyle = 'hsla(' + p.hue + ', 80%, 70%, ' + p.opacity + ')';
				meteorCtx.fill();

				// Soft glow on larger particles
				if (p.radius > 2) {
					meteorCtx.beginPath();
					meteorCtx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
					meteorCtx.fillStyle = 'hsla(' + p.hue + ', 70%, 60%, ' + (p.opacity * 0.15) + ')';
					meteorCtx.fill();
				}
			}

			// Keep looping while there are active elements or the shower is still spawning
			if (running) {
				animationId = requestAnimationFrame(update);
			}
			// Clean up when everything is done
			if (meteors.length === 0 && particles.length === 0 && !spawnPending) {
				running = false;
				if (animationId) cancelAnimationFrame(animationId);
				setTimeout(function() {
					if (meteorCanvas && meteorCanvas.parentNode) {
						meteorCanvas.parentNode.removeChild(meteorCanvas);
						meteorCanvas = null;
						meteorCtx = null;
					}
				}, 300);
			}
		}

		function triggerMeteorShower() {
			if (running) return;
			running = true;
			meteors = [];
			particles = [];
			createCanvas();

			// Spawn first meteor immediately so the animation loop has something to draw
			meteors.push(spawnMeteor());
			spawnPending = true;

			var count = 5 + Math.floor(Math.random() * 5);
			var spawned = 0;
			for (var i = 1; i <= count; i++) {
				(function(delay) {
					setTimeout(function() {
						if (meteorCanvas && running) meteors.push(spawnMeteor());
						spawned++;
						if (spawned >= count) spawnPending = false;
					}, delay);
				})(i * 250 + Math.random() * 200);
			}

			animationId = requestAnimationFrame(update);
		}

		var btn = document.getElementById('meteorBtn');
		if (btn) {
			btn.addEventListener('click', function(e) {
				e.preventDefault();
				triggerMeteorShower();
			});
		}

		window.addEventListener('resize', function() {
			if (meteorCanvas) {
				meteorCanvas.width = window.innerWidth;
				meteorCanvas.height = window.innerHeight;
			}
		});
	})();
});

})(jQuery);

// Global handler to ensure modal close button always works
document.addEventListener('click', function(e) {
	// Check if the clicked element or any parent is the close button
	let target = e.target;
	while (target && target !== document) {
		if (target.id === 'ajModalClose' || target.classList.contains('aj-modal-close')) {
			e.preventDefault();
			e.stopPropagation();
			const modal = document.getElementById('ajModal');
			if (modal) {
				modal.style.display = 'none';
				modal.setAttribute('aria-hidden', 'true');
			}
			return;
		}
		target = target.parentElement;
	}
}, true); // Use capture phase to catch events early

// Click effect - show image at click position
document.addEventListener('click', function(e) {
	// Check if click effects are disabled globally
	if (document.body.classList.contains('no-click-effects')) {
		return;
	}
	
	// Check if click is within the biography card, footer, mini-nav, or carousel controls
	const ajCard = e.target.closest('.aj-card');
	const footer = e.target.closest('#footer');
	const footerBottom = e.target.closest('#footer-bottom');
	const miniNav = e.target.closest('.aj-mini-nav');
	const swiperNav = e.target.closest('.featured-carousel-prev, .featured-carousel-next, .featured-pagination');
	const overlay = e.target.closest('.project-overlay');
	const overlayBtn = e.target.closest('.overlay-btn');

	if (ajCard || footer || footerBottom || miniNav || swiperNav || overlay || overlayBtn) {
		return; // Don't show effect in these areas
	}
	
	const images = ['images/pop.png', 'images/d1.png', 'images/cookies.png', 'images/blue-star.png'];
	const randomImage = images[Math.floor(Math.random() * images.length)];
	
	const img = document.createElement('img');
	img.src = randomImage;
	img.style.position = 'absolute';
	img.style.left = e.pageX + 'px';
	img.style.top = e.pageY + 'px';
	img.style.transform = 'translate(-50%, -50%)';
	img.style.maxWidth = '80px';
	img.style.maxHeight = '80px';
	img.style.opacity = '0';
	img.style.pointerEvents = 'none';
	img.style.transition = 'opacity 0.2s ease-in-out';
	img.style.zIndex = '9999';
	
	document.body.appendChild(img);
	
	// Fade in
	setTimeout(() => {
		img.style.opacity = '1';
	}, 10);
	
	// Fade out and remove
	setTimeout(() => {
		img.style.opacity = '0';
		setTimeout(() => {
			document.body.removeChild(img);
		}, 200);
	}, 1500);
});