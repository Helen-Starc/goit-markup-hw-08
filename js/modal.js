//Добавляет и удаляет .is-hidden в .modal при открытии-закрытии
(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();

// Добавляет .modal-animation в .modal при клике на
//.hero-btn и удаляет при окончании анимации
(() => {
	const refs = {
		modal: document.querySelector(".modal"),
		herobtn: document.querySelector(".hero-btn"),
	};

	refs.herobtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("modal-animation");
	}
	// Отслеживаем окончание анимации
	refs.modal.addEventListener("animationend", AnimationHandler, false);

	function AnimationHandler() {
		// Удаляем класс с анимацией
		refs.modal.classList.remove("modal-animation");
	}
})();
