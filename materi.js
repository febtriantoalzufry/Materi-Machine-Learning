const materi = document.querySelectorAll(".materi");
let index = 0;

function showMateri(newIndex, direction) {
    if (newIndex < 0 || newIndex >= materi.length) return;

    // keluar
    materi[index].classList.remove("active");
    materi[index].classList.add(direction === "next" ? "exit-left" : "exit-right");

    setTimeout(() => {
        materi[index].classList.remove("exit-left", "exit-right");

        index = newIndex;
        materi[index].classList.add("active");
    }, 500);
}

function nextMateri() {
    showMateri(index + 1, "next");
}

function prevMateri() {
    showMateri(index - 1, "prev");
}

/* Keyboard support */
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") nextMateri();
    if (e.key === "ArrowLeft") prevMateri();
});
