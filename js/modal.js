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

	function toggleModal() {
		document.body.classList.toggle("modal-open");
		refs.backdrop.classList.toggle("is-hidden");
		refs.modal.classList.toggle("modal-animation");
	}
})();
