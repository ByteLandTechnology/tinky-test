[**tinky-test**](../README.md)

---

[tinky-test](../globals.md) / render

# Function: render()

> **render**(`node`, `options?`): [`RenderResult`](../interfaces/RenderResult.md)

Renders a React component using Tinky directly to mock streams, capturing output for assertions.

## Parameters

### node

`ReactNode`

The React component to render.

### options?

[`TestRenderOptions`](../type-aliases/TestRenderOptions.md) = `{}`

Render options.

## Returns

[`RenderResult`](../interfaces/RenderResult.md)

A RenderResult object containing methods to interact with the rendered component and inspect output.

## Example

```tsx
const { lastFrame, stdin } = render(<App />);
expect(lastFrame()).toContain("Hello World");
```
