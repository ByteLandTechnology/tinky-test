import type { ReactNode } from "react";
import type { RenderOptions } from "tinky";
import { render as tinkyRender } from "tinky";
import { MockReadStream, MockWriteStream } from "./MockStream.js";

// eslint-disable-next-line no-control-regex
const cursorEscapeSequence = /\u001B\[\?25[lh]/g;

/**
 * Strips the final newline from the output string.
 *
 * @param output - The output string to process.
 * @returns The output string without the trailing newline.
 */
const stripFinalNewline = (output: string): string => {
  return output.replace(/\n$/, "");
};

/**
 * Result object returned by the render function.
 */
export interface RenderResult {
  /** Returns the last frame rendered to stdout. */
  lastFrame: () => string;
  /** All frames rendered during the test. */
  frames: string[];
  /** The mock stdin stream. */
  stdin: MockReadStream;
  /** Rerender the component with new props/children. */
  rerender: (node: ReactNode) => void;
  /** Unmount the component. */
  unmount: () => void;
  /** Cleanup the render instance. */
  cleanup: () => void;
  /** Wait until the process exits (simulated). */
  waitUntilExit: () => Promise<void>;
  /** Clear the console output. */
  clear: () => void;
}

/**
 * Creates a new MockWriteStream for stdout.
 * @returns A new MockWriteStream instance.
 */
const createStdout = (): MockWriteStream => {
  return new MockWriteStream();
};

/**
 * Creates a new MockReadStream for stdin.
 * @returns A new MockReadStream instance.
 */
const createStdin = (): MockReadStream => {
  return new MockReadStream();
};

/**
 * Options for the test render function.
 */
export type TestRenderOptions = RenderOptions & {
  /** Environment variables to simulate. */
  env?: Record<string, string | undefined>;
};

/**
 * Renders a React component using Tinky directly to mock streams, capturing output for assertions.
 *
 * @param node - The React component to render.
 * @param options - Render options.
 * @returns A RenderResult object containing methods to interact with the rendered component and inspect output.
 *
 * @example
 * ```tsx
 * const { lastFrame, stdin } = render(<App />);
 * expect(lastFrame()).toContain("Hello World");
 * ```
 */
export const render = (
  node: ReactNode,
  options: TestRenderOptions = {},
): RenderResult => {
  const stdout = createStdout();
  const stderr = new MockWriteStream();
  const stdin = createStdin();
  const frames: string[] = [];
  let latestFrame = "";

  stdout.on("data", (data: unknown) => {
    if (typeof data !== "string") {
      return;
    }

    const output = stripFinalNewline(
      data.toString().replace(cursorEscapeSequence, ""),
    );

    if (output.length === 0) {
      return;
    }

    latestFrame = output;
    frames.push(output);
  });

  const instance = tinkyRender(node, {
    stdout: stdout,
    stderr: stderr,
    stdin: stdin,
    debug: true,
    exitOnCtrlC: false,
    ...options,
  });

  return {
    lastFrame: () => latestFrame,
    frames,
    stdin,
    rerender: instance.rerender,
    unmount: instance.unmount,
    cleanup: instance.cleanup,
    waitUntilExit: instance.waitUntilExit,
    clear: instance.clear,
  };
};
