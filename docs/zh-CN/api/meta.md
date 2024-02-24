---
sidebar_position: 9
---

# 元数据

## 接口概述

该接口提供根据KID,获取对应的ABI和KIP标准

## 请求参数

* `kid`：'必填参数，合约地址'

## 请求示例

### 请求URL

`http://127.0.0.1:8765/api/meta`

### 请求方法

POST

### 请求示例参数

* `kid=kfc7b19b528298c3dfae6e588b91b40945eaec4ad56bc29bb92bc023860ee`


### 响应示例

```json
{
	"code": 200,
	"data": {
		"abi": "[{\"name\":\"$name\",\"params\":[]},{\"name\":\"$symbol\",\"params\":[]},{\"name\":\"$totalSupply\",\"params\":[]},{\"name\":\"$balanceOf\",\"params\":[\"account\"]},{\"name\":\"$getOwner\",\"params\":[]},{\"name\":\"approve\",\"params\":[\"sender\",\"amount\"]},{\"name\":\"increaseAllowance\",\"params\":[\"spender\",\"addedValue\"]},{\"name\":\"decreaseAllowance\",\"params\":[\"spender\",\"subtractedValue\"]},{\"name\":\"$allowance\",\"params\":[\"owner\",\"sender\"]},{\"name\":\"transfer\",\"params\":[\"recipient\",\"amount\"]},{\"name\":\"transferFrom\",\"params\":[\"sender\",\"recipient\",\"amount\"]},{\"name\":\"mint\",\"params\":[\"account\",\"amount\"]},{\"name\":\"burn\",\"params\":[\"amount\"]},{\"name\":\"renounceOwnership\",\"params\":[]},{\"name\":\"transferOwnership\",\"params\":[\"newOwner\"]}]",
		"kip": "K20"
	},
	"msg": "success"
}
```