---
sidebar_position: 5
---

# Contract events

## Interface overview

This interface provides the ability to obtain a list of events generated under the contract based on the contract address.

## Request parameters

* `kid`: 'Required parameters, contract address'
* `page`: 'optional parameter, page number'

## Request example

### Request URL

`http://127.0.0.1:8765/api/address/:kid-event?page=1`

### Request method

GET

### Request sample parameters

* `kid=kfc47abb2fbaa4c85cd388b2fcc4bd430ed152208563958d519944d327b26`


### Response example

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