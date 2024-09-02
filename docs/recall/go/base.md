# Golang 语法速查

::: tip
语法速查只适用于有经验者重拾回忆，不适合用于新手学习。
:::

## 变量声明

```go
// 变量声明
var a, b int
var c, d = 1, 2 // 可同时赋值，此时可省略类型
var (
  e int
  f = 11
)

// 短声明
i, j, k := 4, 5, 6 // 变量声明同时赋值，不可用于全局变量声明，不可标注类型
```

## 常量声明

```go
// 常量声明
const c1, c2 string = "hello", "world"
const c3, c4 = "so", "soso"
const (
    c5 int = 1
    c6 = 2
)

// iota
const (
   c1 = iota * 10 // (iota=0) 0
   c2             // (iota=1) 10
   c3             // (iota=2) 20
)
const (
   a, b = iota + 1, iota + 2 // (iota=0) 1, 2
   c, d                      // (iota=1) 2, 3
   e, f                      // (iota=2) 3, 4
   g, h = iota * 2, iota * 3 // (iota=3) 6, 9
   i, k                      // (iota=4) 8, 12
)
```

## 类型

### 基础类型

- 布尔类型: `bool` (值为 `true` or `false`)
- 定长整型: `int8`/`int16`/`int32`/`int64`/`uint8`/`uint16`/`uint32`/`uint64`
- 不定长整型: `int`/`uint` (32/64 位系统下分别位 32/64 位)
- 浮点型: `float32`/`float64`
- 复数型: `complex64`/`complex128` (实部、虚部都是一个对应 float)
- 字符型:
  - `byte` = `uint8`, 一般用于表示 ASCII 字符
  - `rune` = `int32`, 一般用于标识 Unicode 字符
- 字符串类型: `string`
- 数组类型(Array): 语法为 `[length]type` (e.g. `[10]int`)
- 切片类型(Slice): 语法为 `[]type` (e.g. `[]int`)
- 字典类型(Map): `map[keyType]valueType` (e.g. `map[string]string`)
- 函数类型(Function)
- 接口类型(Interface)
- 结构类型(Struct)
- 其他特殊类型: `uintptr`

### 类型转换和强制类型转换

类型转换

```go
a = (int32)b
```

### 类型扩展

## 函数

::: info
函数支持多返回值
:::

## Struct

## 接口
