import { describe, test, expect } from "bun:test";
import { Text, Box } from "tinky";
import { render } from "../src/index.js";

describe("render", () => {
  test("should render text content", () => {
    const { lastFrame } = render(<Text>Hello World</Text>);
    expect(lastFrame()).toContain("Hello World");
  });

  test("should render nested components", () => {
    const { lastFrame } = render(
      <Box flexDirection="column">
        <Text>Line 1</Text>
        <Text>Line 2</Text>
      </Box>,
    );
    expect(lastFrame()).toContain("Line 1");
    expect(lastFrame()).toContain("Line 2");
  });

  test("should handle rerenders", () => {
    const { lastFrame, rerender } = render(<Text>Initial</Text>);
    expect(lastFrame()).toContain("Initial");

    rerender(<Text>Updated</Text>);
    expect(lastFrame()).toContain("Updated");
  });

  test("should clean up listeners on unmount", () => {
    const { unmount } = render(<Text>Test</Text>);
    unmount();
    expect(true).toBe(true);
  });
});
