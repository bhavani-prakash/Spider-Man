const mainSuit = document.getElementById("mainSuit");

const suitImages = document.querySelectorAll(".suit-div img");

suitImages.forEach(img => {
    img.addEventListener("click", () => {
        mainSuit.src = img.src;
    });
});