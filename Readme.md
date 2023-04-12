<p>├── src/
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
</p>


<p>src/controllers/: Каталог, содержащий контроллеры для различных операций CRUD.</p>
<p>src/controllers/base-controller.ts: Базовый класс контроллера с распространенными методами, такими как sendMessage, parseCommand и т.д.</p>
<p>src/controllers/create-controller.ts: Класс контроллера для создания новых пользователей</p>
<p>src/controllers/delete-controller.ts: Класс контроллера для удаления существующих пользователей</p>
<p>src/controllers/read-controller.ts: Класс контроллера для чтения существующих пользователей</p>
<p>src/controllers/update-controller.ts: Класс контроллера для обновления существующих пользователей</p>
<p>src/models/: Каталог, содержащий модели для разных объектов в системе</p>
<p>src/models/base-model.ts: Класс базовой модели с распространенными методами, такими как create, read, update, delete и т.д.</p>
<p>src/models/user-model.ts: Класс модели для представления пользовательских сущностей</p>
<p>src/types/: Каталог, содержащий определения типов, используемые во всем приложении</p>
<p>src/types/bot-types.ts: Определения типов для объектов, связанных с Telegram-ботом</p>
<p>src/utils/: Каталог, содержащий служебные функции и классы, используемые во всем приложении</p>
<p>src/utils/telegram-bot-utils.ts: Служебный класс с методами для взаимодействия с API ботов Telegram</p>
<p>src/app.ts: Основной файл приложения, отвечающий за инициализацию бота и настройку маршрутов</p>
<p>src/config.ts: Файл конфигурации, содержащий переменные среды и другие параметры</p>
<p>src/index.ts: Точка входа для приложения, ответственного за запуск бота</p>
