
document.querySelector("#cur-slide").textContent = `${currentSlide} / ${totalSlides}`;

function showSlide(slideNumber) {
    document.querySelectorAll('.slide').forEach(slide => slide.classList.remove('active'));
    document.getElementById(`slide-${slideNumber}`).classList.add('active');
    document.querySelector("#cur-slide").textContent = `${currentSlide} / ${totalSlides}`;
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        currentSlide++;
        showSlide(currentSlide);
    } else {
        // Optionally loop back to the first slide
        currentSlide = 1;
        showSlide(currentSlide);
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        showSlide(currentSlide);
    } else {
        // Optionally loop back to the last slide
        currentSlide = totalSlides;
        showSlide(currentSlide);
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        nextSlide();
    } else if (event.key === "ArrowLeft") {
        prevSlide();
    }
}
);