export class Message {
  static success(message: string, data?: any) {
    return { success: true, message, data };
  }

  static error(message: string, details?: any) {
    return { success: false, message, details };
  }
}
