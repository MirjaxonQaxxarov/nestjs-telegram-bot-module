# 📢 NestJS Telegram Bot Module

Bu loyiha **NestJS** va **Telegraf.js** asosida **Telegram bot** yaratish uchun mo‘ljallangan.

---

## 🚀 O‘rnatish

### 1️⃣ **SRC papkasi ichiga klon qilish**

Agar botni **src/** papkasi ichiga joylashtirmoqchi bo‘lsangiz, quyidagi amallarni bajaring:

```sh
mkdir -p src/telegram-bot
cd src/telegram-bot
git clone https://github.com/MirjaxonQaxxarov/nestjs-telegram-bot-module .
cd ../..
npm install telegraf
```

📌 **Eslatma:** `.` nuqtasi klon qilingan fayllarni **src/telegram-bot** papkasi ichiga joylashtiradi.

---

### 2️⃣ **Loyihani 0 dan o‘rnatish**

Agar siz botni to‘liq mustaqil loyiha sifatida yaratmoqchi bo‘lsangiz, quyidagilarni bajaring:

#### **1. Yangi NestJS loyihasi yaratish**

```sh
npm i -g @nestjs/cli
nest new nestjs-telegram-bot
cd nestjs-telegram-bot
```

#### **2. Telegram bot modulini klon qilish**

```sh
git clone https://github.com/MirjaxonQaxxarov/nestjs-telegram-bot-module src/telegram-bot
```

#### **3. Telegraf va kerakli kutubxonalarni o‘rnatish**

```sh
npm install
```

#### **4. .env faylni yaratish**

Loyiha katalogida **.env** fayl oching va quyidagi ma'lumotlarni kiriting:

```env
TELEGRAM_BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
```

📌 **Eslatma:** Bot tokenini [@BotFather](https://t.me/BotFather) orqali oling.

---

## 📂 Strukturasi

```sh
📦 src/
 ┣ 📂 telegram/
 ┃ ┣ 📜 telegram.module.ts
 ┃ ┣ 📜 telegram.service.ts
 ┣ 📜 app.module.ts
 ┗ 📜 main.ts
```

---

## ⚙️ TelegramModule

`app.module.ts` NestJS modul fayliga moduleni qushamiz:

```ts
import { Module } from '@nestjs/common';
import * as process from 'node:process';
import * as dotenv from 'dotenv';
import { TelegramModule } from './src/telegram/telegram.module';

dotenv.config();

@Module({
  imports: [TelegramModule],
})
export class AppModule {}

```

---

## 🔥 Ishga tushirish

### 1️⃣ **Loyihani kompilyatsiya qilish va ishga tushirish**

```sh
npm run start
```

📌 **Eslatma:** Agar **nodemon** ishlatmoqchi bo‘lsangiz:

```sh
npm run start:dev
```

---

## ✨ Buyruqlar ro‘yxati

| Buyruq   | Tavsif                    |
| -------- | ------------------------- |
| `/start` | Botni ishga tushirish     |
| `/help`  | Yordam oynasini chiqarish |

---

## 📌 Qo‘shimcha

- Agar bot **ishlamasa**, `.env` fayldagi **TOKEN** to‘g‘ri kiritilganini tekshiring.
- Agar sizda **dotenv** bo'lmasa  `npm install dotenv` qiling.
- NestJS dasturini **restart** qiling: `npm run start:dev`
- Telegram bot bilan ishlash uchun rasmiy [Telegraf.js hujjatlari](https://telegraf.js.org/)ga qarang.

---

✅ **Endi siz NestJS bilan ishlovchi Telegram botga egasiz!** 🚀

