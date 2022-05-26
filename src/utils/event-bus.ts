type EventHandler = (...args: any[]) => void;
type Listeners = Record<string, EventHandler[]>;

export class EventBus {
  listeners: Listeners = {};

  protected check(event: string) {
    if (!this.listeners[event]) {
      throw new Error(`No such event: ${event}`);
    }
  }

  on(event: string, handler: EventHandler) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(handler);
  }

  off(event: string, handler: EventHandler) {
    this.check(event);
    this.listeners[event] = this.listeners[event].filter((listener) => listener !== handler);
  }

  emit(event: string, ...args: any[]) {
    this.check(event);
    this.listeners[event].forEach((listener) => listener(...args));
  }
}
