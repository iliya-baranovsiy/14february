const heartContainer = document.getElementById('heart-container');

function createHeart() {
    const heart = document.createElement('div'); // создаем элемент
    heart.classList.add('heart'); // применяем класс, чтобы применить стили
    heart.style.left = `${Math.random() * 100}vw`; // случайное положение по горизонтали
    heart.style.animationDuration = `${Math.random() * 2 + 2}s`; // случайная скорость падения
    heartContainer.appendChild(heart); // добавляем сердечко в контейнер

    // Удаление сердечка после анимации
    heart.addEventListener('animationend', () => {
        heart.remove(); // удалить элемент по окончании анимации
    });
}

// Запуск создания сердечек каждые 500 мс
setInterval(createHeart, 500);