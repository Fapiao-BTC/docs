---
sidebar_position: 13
---

# Real-time subscription (non-local)

## Interface overview

This interface provides the latest processed transactions and generated log push

## Request parameters

```json
{
	event: 10001 || 10002,
	data: 'logs' || 'transactions'
}
```

## Parameter Description
```bash
The local test environment does not provide this interface

10001: Start subscribing
10002:Cancel subscription

data: 'logs' || 'transactions'
```

## Request example

### Request URL

`/api/subscribe`

### Request method

WebSockets


### Example
```javascript
const WebSocket = require('ws');

let ws = null
let subList = []

function subscribe(nodeUrl, t, callback) {
	try {
		if (null === ws) {
			ws = new WebSocket(nodeUrl)
			ws.on('open', function() {
				sub(t)
			});

			ws.on('message', function(message) {
				let msg = JSON.parse(message.toString("utf8"))
				callback(msg.data, null)
			});

			ws.on('close', function() {
				console.log('WebSocket close');
				ws = null
			});

			ws.on('error', function(error) {
				console.error('WebSocket error: ', error);
				ws = null
				callback(null, error)
			});
		} else {
			if (subList.includes(t)) {
				return
			}
			sub(t)
		}

	} catch (e) {
		callback(null, e)
	}
}

function unsubscribe(t, callback) {
	let error, result
	try {
		result = unSub(t)
	} catch (e) {
		error = e
	}
	callback(result, error)
}


function clearSubscriptions() {
	if (ws) {
		subList.forEach(sub => {
			unSub(sub)
		})
		ws.close()
		ws = null
	}
}


function sub(t) {
	if (ws) {
		if (t != "logs" && t != "transactions") {
			throw new Error("not support")
		}
		let message = {
			event: 10001,
			data: t
		}
		send(message);
		subList.push(t)
	}
}

function unSub(t) {
	if (ws) {
		if (t != "logs" && t != "transactions") {
			throw new Error("not support")
		}
		let message = {
			event: 10002,
			data: t
		}
		return send(message);
	}
}


function send(message) {
	if (ws) {
		let msg = JSON.stringify(message)
		return ws.send(msg)
	}
}


module.exports = {
	Fapiao: {
		subscribe,
		unsubscribe,
		clearSubscriptions,
	}
}
```

### use
```javascript
async function getTx(hash, subObj = null) {
	if (subObj) {
		subTxMap[subObj.hash] = subObj.op
		Fapiao.subscribe(FapiaoNode_Url + "/subscribe", "transactions", async function( /** @type {any[]} */
			result, /** @type {{ toString: () => any; }} */ error) {
			if (error) {
				util.log("error:", error.toString())
			}
			let tx = result[0]
			let op = subTxMap[tx.tx_hash]
			switch (op) {
				case "send":
					util.log(tx)
					break;
				case "deploy":
					if (tx.status === 1) {
						let cObjd = await getContract(tx.kid);
						util.log(cObjd)
					} else {
						util.log(tx)
					}
					break;
			}
			delete subTxMap[tx.tx_hash]
			util.log(tx)
		})
	}else{
		...
	}
}
```