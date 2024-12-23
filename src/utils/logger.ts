import chalk from 'chalk';

type logLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
  private logToConsole: boolean;
  private logToDB: boolean;

  constructor(logToConsole = true, logToDB = false) {
    this.logToConsole = logToConsole;
    this.logToDB = logToDB;
  }

  public async log(level: logLevel, message: string): Promise<void> {
    const logData = `[${this.timestamp()} [${level.toUpperCase()}]:`;

    if (this.logToConsole) {
      switch (level) {
        case 'info':
          console.log(`${chalk.cyanBright(logData)} ${chalk.white(message)}`);
          break;
        case 'warn':
          console.log(`${chalk.yellowBright(logData)} ${chalk.white(message)}`);
          break;
        case 'error':
          console.log(`${chalk.redBright(logData)} ${chalk.white(message)}`);
          break;
        case 'debug':
          console.log(`${chalk.yellow(logData)} ${chalk.white(message)}`);
          break;
        default:
          console.log(`${chalk.white(logData)} ${chalk.white(message)}`);
      }
    }
  }

  private async saveToDatabase(): Promise<void> {
    console.log('save to db');
  }

  private timestamp(): string {
    return new Date().toISOString();
  }
}

export const logger = new Logger();
