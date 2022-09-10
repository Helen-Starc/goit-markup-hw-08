(() => {
	const menuBtnRef = document.querySelector("[data-menu-button]");
	const mobileMenuRef = document.querySelector("[data-menu]");
	const menuBackdropRef = document.querySelector("[data-menu-backdrop]");

	menuBtnRef.addEventListener("click", () => {
		document.body.classList.toggle("menu-open");

		const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

		menuBtnRef.classList.toggle("is-open");
		menuBtnRef.setAttribute("aria-expanded", !expanded);

		menuBackdropRef.classList.toggle("is-open");
		mobileMenuRef.classList.toggle("is-open");
	});
})();
