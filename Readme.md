├── src/
│   ├── controllers/
│   │   ├── base-controller.ts
│   │   ├── create-controller.ts
│   │   ├── delete-controller.ts
│   │   ├── read-controller.ts
│   │   └── update-controller.ts
│   ├── models/
│   │   ├── base-model.ts
│   │   └── user-model.ts
│   ├── types/
│   │   └── bot-types.ts
│   ├── utils/
│   │   └── telegram-bot-utils.ts
│   ├── app.ts
│   ├── config.ts
│   └── index.ts
├── node_modules/
├── package.json
├── tsconfig.json



src/controllers/: Каталог, содержащий контроллеры для различных операций CRUD.
src/controllers/base-controller.ts: Базовый класс контроллера с распространенными методами, такими как sendMessage, parseCommand и т.д.
src/controllers/create-controller.ts: Класс контроллера для создания новых пользователей
src/controllers/delete-controller.ts: Класс контроллера для удаления существующих пользователей
src/controllers/read-controller.ts: Класс контроллера для чтения существующих пользователей
src/controllers/update-controller.ts: Класс контроллера для обновления существующих пользователей
src/models/: Каталог, содержащий модели для разных объектов в системе
src/models/base-model.ts: Класс базовой модели с распространенными методами, такими как create, read, update, delete и т.д.
src/models/user-model.ts: Класс модели для представления пользовательских сущностей
src/types/: Каталог, содержащий определения типов, используемые во всем приложении
src/types/bot-types.ts: Определения типов для объектов, связанных с Telegram-ботом
src/utils/: Каталог, содержащий служебные функции и классы, используемые во всем приложении
src/utils/telegram-bot-utils.ts: Служебный класс с методами для взаимодействия с API ботов Telegram
src/app.ts: Основной файл приложения, отвечающий за инициализацию бота и настройку маршрутов
src/config.ts: Файл конфигурации, содержащий переменные среды и другие параметры
src/index.ts: Точка входа для приложения, ответственного за запуск бота
