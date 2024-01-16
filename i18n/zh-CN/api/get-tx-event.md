---
sidebar_position: 6
---

# 交易事件

## 接口概述

该接口提供根据交易Hash,获取交易下产生的事件列表

## 请求参数

* `txHash`：'必填参数，交易Hash值'
* `page`：'可选参数，页码'

## 请求示例

### 请求URL

`http://127.0.0.1:8765/api/event/tx/:txHash?page=1`

### 请求方法

GET

### 请求示例参数

* `txHash=286b3ce4daef3b8aed6b69716c3c1f63b3871ef8990d972375a1a216fb5209cc`


### 响应示例

```json
{
	"code": 200,
	"data": [{
		"kid": "kfc47abb2fbaa4c85cd388b2fcc4bd430ed152208563958d519944d327b26",
		"tx_hash": "286b3ce4daef3b8aed6b69716c3c1f63b3871ef8990d972375a1a216fb5209cc",
		"height": 5027792,
		"method": "init",
		"name": "Transfer",
		"args": "7b22616d6f756e74223a3930303030303030302c2266726f6d223a223030303030222c22746f223a22324e37545972444b4e655a66346556475844564a79524b576150646278347176434a6a227d",
		"time_stamp": 1705027792
	}],
	"msg": "success"
}
```