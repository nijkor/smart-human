# smart-human
## Описание

**smart-human** — это расширение для Google Chrome, которое автоматически меняет все картинки на Яна Топлеса.

## Установка

1. Склонируйте репозиторий или скачайте содержимое.
2. Перейдите в раздел "Управление расширениями" (`chrome://extensions`) и включите там режим разработчика.
3. Нажмите **"Загрузить распакованное расширение"** и выберите папку с файлами расширения.
4. **Profit**

## Я хочу, чтобы расширение показывало мне глупого человека без очков!

Не вопрос: в файле `content.js` на первой строке измените адрес фотографии на свой:

```js
const NEW_IMAGE_URL = "https://example.com/stupid-human.jpg";
