# 🚀 Продвинутый SCSS + Gulp Стартер-проект

Масштабируемый, модульный и лёгкий стартовый шаблон для современной фронтенд-разработки с использованием **SCSS**, **Gulp** и кастомной адаптивной сетки.

---

## ✨ Основные особенности

- 🎨 **Модульная SCSS-архитектура** по паттерну 7–1
- 🔧 **Гибкая Gulp-сборка** для разработки и продакшна
- 🧱 **Адаптивная сетка** на основе CSS Grid и Flexbox
- 🌓 **Поддержка тёмной и светлой темы**
- ⚙️ **Утилитарные классы**: отступы, дисплей, выравнивание
- 🧩 **Готовые компоненты**: кнопки, формы, карточки

---

## 🚀 Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск сервера разработки с LiveReload
npm run dev

# Сборка продакшн-версии
npm run build


📁 Структура проекта
csharp

src/
├── index.html              # Пример страницы с компонентами
├── scss/
│   ├── base/               # Сбросы, типографика
│   ├── config/             # Переменные, миксины, функции
│   ├── layout/             # Сетка, контейнеры, grid/flex
│   ├── utilities/          # Отступы, выравнивание, дисплей
│   ├── components/         # Кнопки, формы, карточки
│   ├── themes/             # Светлая и тёмная темы
│   └── main.scss           # Главный SCSS-файл
├── js/                     # JavaScript-файлы
├── images/                 # Графика
dist/                       # Генерируется автоматически


📦 Доступные npm-скрипты
Команда	Назначение
npm run dev	Запуск сервера разработки с LiveReload
npm run build	Сборка оптимизированной версии
npm run lint	Проверка и автоматическое исправление стилей через Stylelint


⚙️ Gulp-задачи
styles — Компиляция SCSS → CSS, автопрефиксы, минификация
scripts — Сборка JavaScript (если нужно)
images — Оптимизация изображений
clean — Очистка директории dist
watch — Отслеживание файлов
browserSync — Локальный сервер с автообновлением

🧩 Использование утилит
📐 Отступы
html

<div class="m-10">Внешний отступ 10px со всех сторон</div>
<div class="mt-20">Верхний внешний отступ 20px</div>
<div class="p-15">Внутренний отступ 15px со всех сторон</div>
<div class="py-10">Внутренний отступ сверху и снизу 10px</div>
🧱 Сетка
html
Копировать
Редактировать
<div class="grid grid--cols-2 grid--gap-md">
  <div class="grid-item">Колонка 1</div>
  <div class="grid-item">Колонка 2</div>
</div>
📱 Адаптивность
html

<div class="d-none d-md-block">Видно только на md и выше</div>
<div class="text-center text-md-left">Центр на мобилках, влево на md+</div>
⚠️ Класс .row не используется — вместо него применяется кастомная грид-система с .grid. Подробнее см. в scss/layout/_grid.scss.
