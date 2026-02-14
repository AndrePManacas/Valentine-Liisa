const plant = document.getElementById("plant");

plant.addEventListener("click", () => {
    plant.classList.remove("idle");
    plant.classList.add("grown");
    plant.style.cursor = "default";
}, { once: true });