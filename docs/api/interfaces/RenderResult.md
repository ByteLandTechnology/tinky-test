[**tinky-test**](../README.md)

---

[tinky-test](../globals.md) / RenderResult

# Interface: RenderResult

Result object returned by the render function.

## Properties

### cleanup()

> **cleanup**: () => `void`

Cleanup the render instance.

#### Returns

`void`

---

### clear()

> **clear**: () => `void`

Clear the console output.

#### Returns

`void`

---

### frames

> **frames**: `string`[]

All frames rendered during the test.

---

### lastFrame()

> **lastFrame**: () => `string`

Returns the last frame rendered to stdout.

#### Returns

`string`

---

### rerender()

> **rerender**: (`node`) => `void`

Rerender the component with new props/children.

#### Parameters

##### node

`ReactNode`

#### Returns

`void`

---

### stdin

> **stdin**: [`MockReadStream`](../classes/MockReadStream.md)

The mock stdin stream.

---

### unmount()

> **unmount**: () => `void`

Unmount the component.

#### Returns

`void`

---

### waitUntilExit()

> **waitUntilExit**: () => `Promise`\<`void`\>

Wait until the process exits (simulated).

#### Returns

`Promise`\<`void`\>
