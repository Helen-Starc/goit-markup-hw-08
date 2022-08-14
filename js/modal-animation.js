// Animation repeat

let modal = document.querySelector(".modal");
let herobtn = document.querySelector(".hero-btn");

herobtn.addEventListener("click", function () {
	modal.classList.add("modal-animation");
});

// Отслеживаем окончание анимации
modal.addEventListener("animationend", AnimationHandler, false);

function AnimationHandler() {
	// Удаляем класс с анимацией
	modal.classList.remove("modal-animation");
}
