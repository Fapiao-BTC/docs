---
sidebar_position: 11
---

# 读取合约

## 接口概述

该接口提供合约读取交互

## 请求参数

```json
{
	"sender": "",
	"source": ""
}
```

## 请求示例

### 请求URL

`http://127.0.0.1:8765/api/call`

### 请求方法

POST

### 请求示例参数

```json
{
	"sender":"2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",
	"source":"7b226b6964223a226b666337663563663165356637653962383539373237643262666466323166306430383665373432346436636563383838386463353165316631313663222c226d6574686f64223a22246e616d65222c2261726773223a5b5d7d"
}
```


### 响应示例

```json
{
	"code": 200,
	"data": {
		"input": {
			"method": "$name",
			"args": [],
			"kid": "kfc7f5cf1e5f7e9b859727d2bfdf21f0d086e7424d6cec8888dc51e1f116c"
		},
		"out": "KFC-INSC"
	},
	"msg": "success"
}
```