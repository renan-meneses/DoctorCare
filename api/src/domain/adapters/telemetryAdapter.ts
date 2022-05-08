export interface TelemetryAdapter {
  info(message: string): Promise<void>
}
