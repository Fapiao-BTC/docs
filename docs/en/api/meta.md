---
sidebar_position: 9
---

# Metadata

## Interface overview

This interface provides the ability to obtain the corresponding ABI and KIP standards based on KID.

## Request parameters

* `kid`: 'Required parameters, contract address'

## Request example

### Request URL

`http://127.0.0.1:8765/api/meta`

### Request method

POST

### Request sample parameters

* `kid=kfc7b19b528298c3dfae6e588b91b40945eaec4ad56bc29bb92bc023860ee`


### Response example

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