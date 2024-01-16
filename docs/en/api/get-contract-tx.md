---
sidebar_position: 4
---

# Contract trading

## Interface overview

This interface provides the ability to obtain the transaction list generated under the contract based on the contract address.

## Request parameters

* `kid`: 'Required parameters, contract address'
* `page`: 'optional parameter, page number'

## Request example

### Request URL

`http://127.0.0.1:8765/api/address/:kid-tx?page=1`

### Request method

GET

### Request sample parameters

* `kid=kfc47abb2fbaa4c85cd388b2fcc4bd430ed152208563958d519944d327b26`


### Response example

```json
{
	"code": 200,
	"data": [{
		"height": 5027792,
		"tx_hash": "286b3ce4daef3b8aed6b69716c3c1f63b3871ef8990d972375a1a216fb5209cc",
		"sender": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",
		"kid": "kfc47abb2fbaa4c85cd388b2fcc4bd430ed152208563958d519944d327b26",
		"op": "deploy",
		"input": "636c61737320436f6e747261637420657874656e6473204b464332307b696e697428297b746869732e5f6e616d653d224b46432d55534454222c746869732e5f73796d626f6c3d224b55534454222c746869732e5f746f74616c537570706c793d3965382c746869732e5f62616c616e6365732e7365744275636b657428746869732e5f6d736753656e64657228292c746869732e5f746f74616c537570706c79292c746869732e6576656e74287b6e616d653a225472616e73666572222c66726f6d3a223030303030222c746f3a746869732e5f6d736753656e64657228292c616d6f756e743a746869732e5f746f74616c537570706c797d297d7d",
		"out": "kfc47abb2fbaa4c85cd388b2fcc4bd430ed152208563958d519944d327b26",
		"time_stamp": 1705027792,
		"status": 1
	}],
	"msg": "success"
}
```