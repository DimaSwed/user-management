# Пользовательское веб-приложение на React + TypeScript + Vite

## Описание проекта

Это веб-приложение, разработанное с использованием React и Redux/RTK, предназначено для просмотра и редактирования данных пользователей. Оно обеспечивает эффективное взаимодействие с большим объемом данных и сохраняет отзывчивость интерфейса при листании списка.

### Основные функции

- **Просмотр данных пользователей**: Отображение списка пользователей с возможностью выбора карточки для редактирования.
- **Редактирование данных**: При нажатии на карточку пользователя открываются поля для редактирования таких данных, как имя, фамилия, возраст и адрес электронной почты.
- **Сохранение изменений**: Кнопка "Обновить пользователя" позволяет сохранять изменения, внесенные в данные пользователя.

### Технологии

- **React**: для создания пользовательского интерфейса.
- **Redux**: для управления состоянием приложения.
- **HTML/SASS**: для разметки и стилизации приложения.
- **Zod**: для валидации полей формы.
- **Faker-js**: для получния фейковых данных пользователей.

### Примечания

Приложение использует локальное хранилище (localStorage) для генерации рандомных данных пользователей с помощью библиотеки Faker. При первом запросе к данным пользователи генерируются и сохраняются в локальном хранилище, что позволяет обеспечить стабильную работу приложения даже при больших объемах информации. В дальнейшем, если данные уже сохранены, приложение будет использовать их из localStorage, избегая повторной генерации.

Функция getMockUsers создает 1000 пользователей с уникальными идентификаторами, именами, фамилиями, адресами электронной почты и возрастом в диапазоне от 18 до 65 лет. Также доступна функция generateMoreUsers, которая позволяет генерировать произвольное количество пользователей по запросу. Это делает приложение гибким и эффективным для работы с большими объемами данных.

### Установка и запуск

1. Склонируйте репозиторий.
2. Установите зависимости с помощью команды `npm install`.
3. Запустите приложение с помощью команды `npm start`.
