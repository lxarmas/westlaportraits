document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-slider img");
    let currentImageIndex = 0;

    function showImage(index) {
        images[currentImageIndex].classList.remove('active');
        images[index].classList.add('active');
        currentImageIndex = index;
    }

    function showNextImage() {
        const nextIndex = (currentImageIndex + 1) % images.length;
        showImage(nextIndex);
    }

    function showPreviousImage() {
        const previousIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(previousIndex);
    }

    showImage(currentImageIndex);

    document.getElementById("next-btn").addEventListener("click", showNextImage);
    document.getElementById("prev-btn").addEventListener("click", showPreviousImage);
});
