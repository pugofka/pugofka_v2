# Развертывание Next.js на Laravel Forge

Это руководство объясняет, как развернуть ваше приложение Next.js на Laravel Forge.

> [!IMPORTANT]
> **Рекомендация: Node.js (Standalone)**
> Мы рекомендуем развертывать приложение как **Node.js приложение** (не Static HTML).
>
> **Почему?**
> Ваш проект использует `next/image` для автоматической оптимизации изображений. Эта функция требует запущенного сервера Node.js для обработки изображений по запросу.
> Если вы используете `output: 'export'` (Static), компонент `<Image>` перестанет работать корректно, если не подключить платный внешний сервис (например, Cloudinary) или не отключить оптимизацию.

## Предварительные требования

1.  **Сервер**: Сервер под управлением Laravel Forge (Ubuntu 20.04/22.04).
2.  **Репозиторий**: Ваш код загружен на GitHub/GitLab.

## Шаг 1: Создание сайта

1.  Перейдите к вашему серверу в Forge.
2.  Нажмите **New Site** (Новый сайт).
3.  **Root Domain**: `example.com` (ваш домен).
4.  **Project Type**: Выберите **Static / Node.js**.
5.  **Web Directory**: Оставьте `/` (или пустым).
6.  Нажмите **Add Site**.

## Шаг 2: Настройка репозитория

1.  Выберите ваш Git-репозиторий (например, `pugofka/gemini-2025`).
2.  **Branch**: `main` (или ваша ветка для продакшена).
3.  **Install Dependencies**: Убедитесь, что галочка стоит.
4.  Нажмите **Install Repository**.

## Шаг 3: Конфигурация Nginx

Forge по умолчанию настроен на отдачу статических файлов. Нам нужно проксировать запросы на наш Node.js сервер.

1.  Перейдите на вкладку **Edit Nginx**.
2.  Замените блок `location /` на следующую конфигурацию прокси:

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

3.  Сохраните конфигурацию.

## Шаг 4: Скрипт сборки (Deploy Script)

Обновите ваш **Deploy Script** в Forge для сборки приложения:

```bash
cd /home/forge/example.com
git pull origin $FORGE_SITE_BRANCH

# Установка зависимостей
npm ci

# Сборка приложения Next.js
npm run build

# Перезапуск демона (см. Шаг 5)
# Мы используем pkill для перезапуска процесса node, управляемого демоном
# Или используйте pm2, если предпочитаете, но Daemon в Forge проще
# Для Daemon обычно достаточно убедиться, что процесс запущен.
# Если используете PM2: pm2 reload all
```

## Шаг 5: Настройка демона (Daemon)

Вам нужен менеджер процессов, чтобы сервер Node.js работал постоянно. В Forge есть вкладка "Daemons".

1.  Перейдите на вкладку **Daemons** в панели управления сервером.
2.  **Command**: `node .next/standalone/server.js`
    *   *Важно*: Так как мы используем `output: "standalone"` в `next.config.ts`, сборка создает автономный файл сервера по пути `.next/standalone/server.js`.
3.  **Directory**: `/home/forge/example.com`
4.  **User**: `forge`
5.  Нажмите **Start Daemon**.

> [!TIP]
> **Переменные окружения**: Не забудьте добавить ваши переменные из `.env` во вкладке **Environment** вашего сайта в Forge.

## Итог

1.  **Тип сайта**: Static / Node.js
2.  **Nginx**: Проксирование на порт 3000.
3.  **Daemon**: Запуск команды `node .next/standalone/server.js`.

Теперь ваш сайт должен работать со всеми возможностями Next.js, включая оптимизацию изображений.
