[Kui API Documentation - v10.8.0](../README.md) / [@kui-shell/core](../modules/kui_shell_core.md) / ResourceWithMetadata

# Interface: ResourceWithMetadata<Content\>

[@kui-shell/core](../modules/kui_shell_core.md).ResourceWithMetadata

A minimal subset of a kubernetes-like resource specification that
identifies a resource

## Type parameters

| Name      | Type   |
| :-------- | :----- |
| `Content` | `void` |

## Hierarchy

- [`MetadataNamedResource`](kui_shell_core.MetadataNamedResource.md)

  ↳ **`ResourceWithMetadata`**

  ↳↳ [`ResourceByReference`](kui_shell_core.ResourceByReference.md)

## Table of contents

### Properties

- [apiVersion](kui_shell_core.ResourceWithMetadata.md#apiversion)
- [content](kui_shell_core.ResourceWithMetadata.md#content)
- [contentType](kui_shell_core.ResourceWithMetadata.md#contenttype)
- [kind](kui_shell_core.ResourceWithMetadata.md#kind)
- [metadata](kui_shell_core.ResourceWithMetadata.md#metadata)
- [nameHash](kui_shell_core.ResourceWithMetadata.md#namehash)
- [onclick](kui_shell_core.ResourceWithMetadata.md#onclick)
- [presentation](kui_shell_core.ResourceWithMetadata.md#presentation)
- [prettyName](kui_shell_core.ResourceWithMetadata.md#prettyname)
- [toolbarText](kui_shell_core.ResourceWithMetadata.md#toolbartext)
- [version](kui_shell_core.ResourceWithMetadata.md#version)

## Properties

### apiVersion

• `Optional` **apiVersion**: `string`

#### Defined in

[packages/core/src/models/entity.ts:64](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L64)

---

### content

• `Optional` **content**: `Content`

#### Defined in

[packages/core/src/models/entity.ts:81](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L81)

---

### contentType

• `Optional` **contentType**: `string`

#### Defined in

[packages/core/src/models/entity.ts:82](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L82)

---

### kind

• `Optional` **kind**: `string`

#### Inherited from

[MetadataNamedResource](kui_shell_core.MetadataNamedResource.md).[kind](kui_shell_core.MetadataNamedResource.md#kind)

#### Defined in

[packages/core/src/models/entity.ts:47](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L47)

---

### metadata

• `Optional` **metadata**: `Object`

#### Type declaration

| Name                 | Type                          |
| :------------------- | :---------------------------- |
| `creationTimestamp?` | `string`                      |
| `generation?`        | `string`                      |
| `labels?`            | `Record`<`string`, `string`\> |
| `name`               | `string`                      |
| `namespace?`         | `string`                      |

#### Inherited from

[MetadataNamedResource](kui_shell_core.MetadataNamedResource.md).[metadata](kui_shell_core.MetadataNamedResource.md#metadata)

#### Defined in

[packages/core/src/models/entity.ts:49](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L49)

---

### nameHash

• `Optional` **nameHash**: `string`

#### Defined in

[packages/core/src/models/entity.ts:71](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L71)

---

### onclick

• `Optional` **onclick**: `Object`

family of onclick handlers

#### Type declaration

| Name         | Type     |
| :----------- | :------- |
| `kind?`      | `string` |
| `name?`      | `string` |
| `nameHash?`  | `string` |
| `namespace?` | `string` |

#### Defined in

[packages/core/src/models/entity.ts:74](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L74)

---

### presentation

• `Optional` **presentation**: [`Presentation`](../enums/kui_shell_core.Presentation.md)

#### Defined in

[packages/core/src/models/entity.ts:84](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L84)

---

### prettyName

• `Optional` **prettyName**: `string`

name hash, e.g. the hash part of auto-generated names, or an openwhisk activation id

#### Defined in

[packages/core/src/models/entity.ts:70](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L70)

---

### toolbarText

• `Optional` **toolbarText**: [`ToolbarText`](kui_shell_core.ToolbarText.md)

#### Defined in

[packages/core/src/models/entity.ts:83](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L83)

---

### version

• `Optional` **version**: `string`

optional designation of resource version

#### Defined in

[packages/core/src/models/entity.ts:67](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L67)
