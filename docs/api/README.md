**tinky-test**

---

# tinky-test

Testing utilities for [Tinky](https://github.com/ByteLandTechnology/tinky), a React-based TUI (Terminal User Interface) rendering library.

`tinky-test` provides a simple and effective way to test your Tinky components without spawning actual processes or needing a real terminal. It mocks `stdout` and `stdin`, capturing the output frames for easy assertion.

## Installation

```bash
npm install --save-dev tinky-test
# or
bun add -d tinky-test
```

## Usage

### Basic Rendering Test

You can use the `render` function to render a Tinky component and assert on its output.

```tsx
import { render } from "tinky-test";
import { Text } from "tinky";
import { describe, test, expect } from "bun:test"; // or your preferred test runner

describe("MyComponent", () => {
  test("renders correctly", () => {
    const { lastFrame } = render(<Text>Hello World</Text>);

    expect(lastFrame()).toContain("Hello World");
  });
});
```

### Testing Re-renders

`tinky-test` allows you to test how your component behaves when props change using the `rerender` function.

```tsx
import { render } from "tinky-test";
import { Text } from "tinky";

test("updates content", () => {
  const { lastFrame, rerender } = render(<Text>Step 1</Text>);
  expect(lastFrame()).toContain("Step 1");

  rerender(<Text>Step 2</Text>);
  expect(lastFrame()).toContain("Step 2");
});
```

### Inspecting Frames

You can access all frames generated during the lifecycle of the component.

```tsx
test("animations or updates", () => {
  const { frames } = render(<MyAnimatedComponent />);

  // Check the sequence of outputs
  expect(frames.length).toBeGreaterThan(1);
});
```

## API Reference

### `render(node: ReactNode, options?: TestRenderOptions): RenderResult`

Renders a React component using Tinky into a mock environment.

**Parameters:**

- `node`: The React element to render.
- `options`: Optional configuration (extends Tinky's `RenderOptions`).

**Returns `RenderResult`:**

- `lastFrame: () => string`: Returns the valid last frame rendered to standard output.
- `frames: string[]`: An array of all frames rendered.
- `stdin`: A mock standard input stream to simulate user input.
- `rerender: (node: ReactNode) => void`: Updates the rendered component.
- `unmount: () => void`: Unmounts the component.
- `cleanup: () => void`: Cleans up the render instance.
- `waitUntilExit: () => Promise<void>`: Waits for the component to exit.
- `clear: () => void`: Clears the console output (mocked).

### `MockStream`

A class that simulates standard streams (stdin/stdout). Useful if you need to manually inspect stream behavior or simulate events.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Generate documentation
npm run docs
```

## License

MIT
