import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { Telegraf, Markup } from 'telegraf';

@Injectable()
export class TelegramService implements OnModuleInit {
  private readonly bot: Telegraf;
  private readonly logger = new Logger(TelegramService.name);

  constructor() {
    this.bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
  }

  async onModuleInit() {
    this.logger.log('Telegram bot ishga tushdi...');

    // Middleware (foydalanuvchi ma'lumotlarini olish)
    this.bot.use((ctx, next) => {
      if (ctx.message) {
        this.logger.log(`Yangi xabar: ${JSON.stringify(ctx.message)}`);
      }
      return next();
    });

    // Start komandasi
    this.bot.start((ctx) => {
      const message = '👋 Salom! Bu NestJS Telegram boti.\n/help yordam uchun.';
      ctx.reply(message);
    });

    // Help komandasi
    this.bot.command('help', (ctx) => {
      const message = '🛠 Buyruqlar:\n/start - Boshlash\n/help - Yordam';
      ctx.reply(message);
    });

    // Inline buttonlar bilan javob
    this.bot.command('menu', (ctx) => {
      ctx.reply(
        'Menyu tanlang:',
        Markup.inlineKeyboard([
          Markup.button.callback('📜 Ro‘yxat', 'list'),
          Markup.button.callback('ℹ️ Ma’lumot', 'info'),
        ]),
      );
    });

    // Callback handler (menu tugmachalarini bosganda)
    this.bot.action('list', async (ctx) => {
      await ctx.reply('📜 Bu sizning ro‘yxatingiz.');
    });

    this.bot.action('info', async (ctx) => {
      await ctx.reply('ℹ️ Bu bot NestJS yordamida yozilgan.');
    });

    // Foydalanuvchi xabariga avtomatik javob
    this.bot.on('text', async (ctx) => {
      const text = ctx.message.text;
      if (text.startsWith('/')) {
        await this.handleCommand(text, ctx.chat.id);
      } else {
        await ctx.reply(`Siz yozdingiz: ${text}`);
      }
    });

    // Botni ishga tushirish
    await this.bot.launch();
  }

  async handleCommand(command: string, chatId: number) {
    switch (command) {
      case '/hello':
        await this.sendMessage(chatId, '👋 Assalomu alaykum!');
        break;
      case '/bye':
        await this.sendMessage(chatId, '👋 Xayr, keyinroq uchrashamiz!');
        break;
      default:
        await this.sendMessage(chatId, `❌ Noma’lum buyruq: ${command}`);
        break;
    }
  }

  async sendMessage(chatId: number, text: string) {
    try {
      await this.bot.telegram.sendMessage(chatId, text);
    } catch (error) {
      this.logger.error(`Xabar jo‘natishda xatolik: ${error.message}`);
    }
  }

  async sendPhoto(chatId: number, photoUrl: string, caption?: string) {
    try {
      await this.bot.telegram.sendPhoto(chatId, photoUrl, { caption });
    } catch (error) {
      this.logger.error(`Rasm jo‘natishda xatolik: ${error.message}`);
    }
  }
}
