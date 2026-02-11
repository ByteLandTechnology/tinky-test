[**tinky-test**](../README.md)

---

[tinky-test](../globals.md) / MockReadStream

# Class: MockReadStream

## Extends

- `EventEmitter`

## Implements

- `ReadStream`

## Constructors

### Constructor

> **new MockReadStream**(): `MockReadStream`

#### Returns

`MockReadStream`

#### Inherited from

`EventEmitter.constructor`

## Properties

### emitter

> **emitter**: `Emitter`\<`Events`\>

The underlying mitt emitter instance.

#### Inherited from

`EventEmitter.emitter`

---

### isTTY

> **isTTY**: `boolean` = `true`

Indicates whether the stream is a TTY (Terminal).

#### Implementation of

`ReadStream.isTTY`

## Methods

### emit()

> **emit**(`event`, `data?`): `boolean`

Emits an event with optional data payload.

#### Parameters

##### event

`string`

The name of the event to emit.

##### data?

`unknown`

Optional data payload to pass to the event handlers.

#### Returns

`boolean`

Always returns `true` indicating the event was emitted.

#### Inherited from

`EventEmitter.emit`

---

### off()

> **off**(`event`, `fn`): `this`

Removes an event listener for the specified event.

#### Parameters

##### event

`string`

The name of the event to stop listening for.

##### fn

`Handler`\<`unknown`\>

The handler function to remove.

#### Returns

`this`

This EventEmitter instance for chaining.

#### Implementation of

`ReadStream.off`

#### Inherited from

`EventEmitter.off`

---

### on()

> **on**(`event`, `fn`): `this`

Registers an event listener for the specified event.

#### Parameters

##### event

`string`

The name of the event to listen for.

##### fn

`Handler`\<`unknown`\>

The handler function to call when the event is emitted.

#### Returns

`this`

This EventEmitter instance for chaining.

#### Implementation of

`ReadStream.on`

#### Inherited from

`EventEmitter.on`

---

### once()

> **once**(`event`, `fn`): `this`

Registers a one-time event listener that automatically removes itself
after being called once.

#### Parameters

##### event

`string`

The name of the event to listen for.

##### fn

`Handler`\<`unknown`\>

The handler function to call when the event is emitted.

#### Returns

`this`

This EventEmitter instance for chaining.

#### Inherited from

`EventEmitter.once`

---

### ref()

> **ref**(): `void`

Keeps the process alive as long as the stream is active.

#### Returns

`void`

#### Implementation of

`ReadStream.ref`

---

### setEncoding()

> **setEncoding**(): `void`

Sets the character encoding for data read from the stream.

#### Returns

`void`

#### Implementation of

`ReadStream.setEncoding`

---

### setRawMode()

> **setRawMode**(): `this`

Sets the stream to raw mode.

#### Returns

`this`

The stream instance.

#### Remarks

Raw mode is required for Tinky to receive character-by-character input
without waiting for Enter to be pressed.

#### Implementation of

`ReadStream.setRawMode`

---

### unref()

> **unref**(): `void`

Allows the process to exit even if the stream is active.

#### Returns

`void`

#### Implementation of

`ReadStream.unref`

---

### write()

> **write**(`data`): `boolean`

Writes data to the stream, simulating user input.
This emits a 'data' event with the provided data.

#### Parameters

##### data

The data to write to the stream.

`string` | `Buffer`\<`ArrayBufferLike`\>

#### Returns

`boolean`

true if the data was written successfully.
