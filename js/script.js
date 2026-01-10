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
						content = '<p>Frimston kavooza, pip pip zibble: grobble-zoink, wuzzah?</p>';
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
								<p style="margin-left: 16px; color: #666;">A: Software engineering and product or UI/UX roles. I like working on things where code and design come together and the end result actually feels good to use.</p>
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
		duration: 1500,
		once: true,
		offset: 20
	});

	// Prevent browser from restoring previous scroll position on navigation
	try {
		if ('scrollRestoration' in history) {
			history.scrollRestoration = 'manual';
		}
	} catch (e) { /* ignore in older browsers */ }

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
					else if (idx === 1) content = '<p>Frimston kavooza, pip pip zibble: grobble-zoink, wuzzah?</p>';
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
	// Check if click is within the biography card or footer
	const ajCard = e.target.closest('.aj-card');
	const footer = e.target.closest('#footer');
	const footerBottom = e.target.closest('#footer-bottom');
	
	if (ajCard || footer || footerBottom) {
		return; // Don't show effect in these areas
	}
	
	const images = ['images/pop.png', 'images/d1.png', 'images/cookies.png'];
	const randomImage = images[Math.floor(Math.random() * images.length)];
	
	const img = document.createElement('img');
	img.src = randomImage;
	img.style.position = 'fixed';
	img.style.left = e.clientX + 'px';
	img.style.top = e.clientY + 'px';
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