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
					ev.preventDefault();
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
						content = '<p>Nerp! Glimmar boochoo. Yarp zendu flibberty gib — tok tok.</p>';
					}
					showModal(title, content);
				});
			});
		})();

        // Active button class management
        $('.filter-button').on('click', function () {
            $('.filter-button').removeClass('active');
            $(this).addClass('active');
            
            var filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
        });
    }

    $(document).ready(function () {
        overlayMenu();
        initChocolat();
        initJarallax();
        initSwiper();

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
					ev.preventDefault();
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
					else content = '<p>Nerp! Glimmar boochoo. Yarp zendu flibberty gib — tok tok.</p>';
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

// Global click handler as a safety-net: close modal when any close button is clicked
document.addEventListener('click', function(e) {
	try {
		var target = e.target;
		if (!target) return;
		// matches the close button by id or class
		if (target.id === 'ajModalClose' || (target.closest && (target.closest('#ajModalClose') || target.closest('.aj-modal-close')))) {
			var m = document.getElementById('ajModal');
			if (m) {
				m.style.display = 'none';
				m.setAttribute('aria-hidden', 'true');
			}
		}
	} catch (err) { /* ignore */ }
});

// Also attach a direct handler after DOMContentLoaded to ensure the close button always works
document.addEventListener('DOMContentLoaded', function() {
	try {
		var closeBtn = document.getElementById('ajModalClose');
		if (!closeBtn) return;
		closeBtn.addEventListener('click', function(ev) {
			ev.preventDefault();
			var m = document.getElementById('ajModal');
			if (m) {
				m.style.display = 'none';
				m.setAttribute('aria-hidden', 'true');
			}
		});
		// also support pointerup/touchend as a fallback
		closeBtn.addEventListener('pointerup', function(ev) {
			ev.preventDefault();
			var m = document.getElementById('ajModal');
			if (m) {
				m.style.display = 'none';
				m.setAttribute('aria-hidden', 'true');
			}
		});
	} catch (err) { /* ignore */ }
});

// Extra capturing listener to ensure clicks/taps on the close button are caught early
['click','pointerup','touchend','pointerdown'].forEach(function(evtName){
	document.addEventListener(evtName, function(e){
		try {
			var t = e.target;
			if (!t) return;
			if (t.id === 'ajModalClose' || (t.closest && (t.closest('#ajModalClose') || t.closest('.aj-modal-close')))) {
				console && console.log && console.log('[ajModal] close triggered by', evtName);
				var m = document.getElementById('ajModal');
				if (m) {
					m.style.display = 'none';
					m.setAttribute('aria-hidden', 'true');
				}
			}
		} catch (err) { /* ignore */ }
	}, true); /* use capture */
});