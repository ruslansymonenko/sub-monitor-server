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
    const logMessage = `${chalk.blue(logData)} ${chalk.white(message)}`;

    if (this.logToConsole) {
      switch (level) {
        case 'info':
          console.log(logMessage);
          break;
        case 'warn':
          console.log(logMessage);
          break;
        case 'error':
          console.log(logMessage);
          break;
        case 'debug':
          console.log(logMessage);
          break;
        default:
          console.log(logMessage);
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

export default Logger;
