// Добавляет и удаляет .is-hidden и .modal-animation на .backdrop и
// .modal при откртии - закрытии
(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
		backdrop: document.querySelector("[data-backdrop]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function windowSize() {
		windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
		windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
	}

	function toggleModal() {
		document.body.classList.toggle("modal-open");
		refs.backdrop.classList.toggle("is-hidden");

		// window.addEventListener("resize", function () {
		// 	if (window.matchMedia("(width >= 768px)").matches) {
		// 		console.log("Screen width is at least 768px");
		// 		refs.modal.classList.toggle("modal-animation");
		// 	} else {
		// 		console.log("Screen less than 768px");
		// 		refs.modal.classList.toggle("modal-mobile-animation");
		// 	}
		// });

		windowSize();
		console.log("width is :", windowWidth, "Height is :", windowHeight);
		if (windowWidth < 480) {
			console.log("width is under 480px !");
			refs.modal.classList.toggle("modal-mobile-animation");
		} else {
			refs.modal.classList.toggle("modal-animation");
		}
	}
})();
