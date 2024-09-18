let currentIndex = 0;
const itemsToShow = 3; // Jumlah item yang terlihat dalam satu waktu
const items = document.querySelectorAll('.food-item');
const totalItems = items.length;

function moveSlider(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    }
    if (currentIndex > totalItems - itemsToShow) {
        currentIndex = totalItems - itemsToShow;
    }

    const newTransform = -currentIndex * 320; // 320 = lebar item + gap (300 + 20)
    document.querySelector('.food-grid').style.transform = `translateX(${newTransform}px)`;
}
