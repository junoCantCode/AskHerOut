document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no");

    noButton.style.transition = "left 0.3s ease, top 0.3s ease";

    noButton.addEventListener("mouseover", function () {
        noButton.style.position = "absolute";

        const randomX = Math.random() * (window.innerWidth - noButton.clientWidth);
        const randomY = Math.random() * (window.innerHeight - noButton.clientHeight);

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

});

document.getElementById("yes").addEventListener("click", function(){
    window.location.href = "yes.html";
});