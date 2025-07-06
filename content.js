// Замените на нужный вам адрес изображения
const NEW_IMAGE_URL = "https://i.ibb.co/YFXZVwF7/image.png";

// Функция для замены всех картинок
function replaceImages() {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.src = NEW_IMAGE_URL;
        img.srcset = "";
        // Для избежания замены по onerror
        img.onerror = null;
    });
}

// Заменить изображения сразу
replaceImages();

// Пытаться заменять изображения при динамических изменениях DOM (например, подгрузка новых картинок)
const observer = new MutationObserver(replaceImages);
observer.observe(document.body, { childList: true, subtree: true });
