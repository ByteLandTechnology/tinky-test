[**tinky-test**](../README.md)

---

[tinky-test](../globals.md) / MockWriteStream

# Class: MockWriteStream

## Extends

- `EventEmitter`

## Implements

- `WriteStream`

## Constructors

### Constructor

> **new MockWriteStream**(): `MockWriteStream`

#### Returns

`MockWriteStream`

#### Inherited from

`EventEmitter.constructor`

## Properties

### columns

> **columns**: `number` = `80`

Number of columns in the terminal.

#### Remarks

This property is used by Tinky to calculate layout and wrap text.
If undefined, Tinky may fall back to a default width (e.g., 80).

#### Implementation of

`WriteStream.columns`

---

### emitter

> **emitter**: `Emitter`\<`Events`\>

The underlying mitt emitter instance.

#### Inherited from

`EventEmitter.emitter`

---

### rows

> **rows**: `number` = `24`

Number of rows in the terminal.

#### Remarks

This property is used by Tinky to handle clearing the screen or scrolling.

#### Implementation of

`WriteStream.rows`

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

`WriteStream.off`

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

`WriteStream.on`

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

### write()

> **write**(`str`): `boolean`

Writes a string to the stream.

#### Parameters

##### str

`string`

The string to write.

#### Returns

`boolean`

`true` if the string has been flushed to the kernel buffer.

#### Implementation of

`WriteStream.write`
