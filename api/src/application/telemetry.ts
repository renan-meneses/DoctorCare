import { TelemetryAdapter } from '@/domain/adapters/telemetryAdapter'
import pino, { LoggerOptions } from 'pino'

export class PinoAdapter implements TelemetryAdapter {
  private loggerConfig: LoggerOptions = {
    transport: {
      options: {
        ignore: 'pid,hostname'
      },
      target: 'pino-pretty'
    }
  }

  private logger = pino(this.loggerConfig)

  public async info(message: string): Promise<void> {
    this.logger.info(message)
  }
}
