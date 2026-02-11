import { EventEmitter, type ReadStream, type WriteStream } from "tinky";

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

  /**
   * Writes data to the stream, simulating user input.
   * This emits a 'data' event with the provided data.
   *
   * @param data - The data to write to the stream.
   * @returns true if the data was written successfully.
   */
  write(data: string | Buffer): boolean {
    this.emit("data", data);
    return true;
  }

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
