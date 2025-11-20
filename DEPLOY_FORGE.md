# Как задеплоить на Laravel Forge

Так как у нас Next.js (Node.js), а Forge заточен под PHP, мы будем использовать его как **Nginx Proxy + Supervisor**.

## 1. Создание Сайта
1.  Зайдите в сервер на Forge.
2.  **New Site**:
    *   **Root Domain**: `next.pugofka.com` (или ваш поддомен).
    *   **Project Type**: `Static HTML` (Важно! Не выбирайте Laravel/PHP, чтобы не создавались лишние конфиги).
    *   **Web Directory**: `/` (оставьте пустым или `/`).
3.  Нажмите **Add Site**.

## 2. Установка Репозитория
1.  Выберите созданный сайт.
2.  **Git Repository**: `pugofka/pugofka_v2`.
3.  **Branch**: `main`.
4.  **Install Repository**.

## 3. Настройка Deploy Script
Перейдите в вкладку **App** -> **Deploy Script** и замените всё на это:

```bash
cd /home/forge/next.pugofka.com
git pull origin main
npm ci
npm run build

# Перезагружаем демона (если он уже запущен)
# php artisan queue:restart # Это для Laravel, нам не нужно
# Вместо этого мы будем использовать PM2 или Supervisor, 
# но самый простой способ в Forge - это команда "Restart" в разделе Daemons.
# Можно добавить команду убивания процесса, но лучше настроить Daemon правильно.
```

*Примечание: При первом деплое `npm run build` создаст папку `.next/standalone`.*

## 4. Настройка Демона (Supervisor)
Чтобы сайт работал постоянно, нужно запустить Node.js процесс.
1.  Перейдите в вкладку **Server** (не сайта, а сервера!) -> **Daemons**.
2.  **Command**: `node /home/forge/next.pugofka.com/.next/standalone/server.js`
    *   *Важно: Путь должен быть полным. Проверьте имя папки сайта.*
3.  **User**: `forge`.
4.  **Directory**: `/home/forge/next.pugofka.com`.
5.  Нажмите **Start Daemon**.

Теперь Node.js сервер запущен на порту `3000` (по умолчанию).

## 5. Настройка Nginx (Проксирование)
Теперь нужно сказать Nginx, чтобы он слал запросы на порт 3000.
1.  Перейдите в настройки сайта -> **Nginx Configuration**.
2.  Найдите блок `location / { ... }` и замените его на:

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

3.  Сохраните.

## 6. Финал
Зайдите на `next.pugofka.com`. Сайт должен работать.

---

### Если нужно обновить сайт:
1.  Нажмите **Deploy Now** в Forge.
2.  После успешного билда, перейдите в **Daemons** и нажмите **Restart** на вашем процессе, чтобы подтянулся новый код.
