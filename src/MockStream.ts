import type { ReadStream, WriteStream } from "tinky";
import { EventEmitter } from "tinky/lib/utils/event-emitter.js";

export class MockWriteStream extends EventEmitter implements WriteStream {
  columns = 80;
  rows = 24;

  write(str: string): boolean {
    this.emit("data", str);
    return true;
  }
}

export class MockReadStream extends EventEmitter implements ReadStream {
  isTTY = true;

  setRawMode(): this {
    return this;
  }

  setEncoding(): void {
    /* no-op */
  }

  ref(): void {
    /* no-op */
  }

  unref(): void {
    /* no-op */
  }
}
