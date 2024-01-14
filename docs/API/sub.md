---
sidebar_position: 13
---

# 实时订阅(非本地)

## 接口概述

该接口提供最新处理的交易和产生的日志推送

## 请求参数

```json
{
	event: 10001 || 10002,
	data: 'logs' || 'transactions'
}
```

## 参数说明
```bash
本地测试环境不提供该接口

10001:开始订阅
10002:取消订阅

data: 'logs' || 'transactions'
```

## 请求示例

### 请求URL

`/api/subscribe`

### 请求方法

WebSocket


### 示例
```javascript
const WebSocket = require('ws');

let ws = null
let subList = []

function subscribe(nodeUrl, t, callback) {
	try {
		if (null === ws) {
			ws = new WebSocket(nodeUrl)
			ws.on('open', function() {
				//初始化后再订阅
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
			//如果已经订阅过直接返回
			if (subList.includes(t)) {
				return
			}
			//直接开始订阅
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
			throw new Error("不支持的订阅类型")
		}
		let message = {
			event: 10001,
			data: t
		}
		send(message);
		//添加所有订阅名称
		subList.push(t)
	}
}

function unSub(t) {
	if (ws) {
		if (t != "logs" && t != "transactions") {
			throw new Error("不支持的订阅类型")
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

### 使用
```javascript
//获取交易详情
async function getTx(hash, subObj = null) {
	if (subObj) {
		util.log("Tx Hash:", hash, "交易打包中...")
		//添加交易Hash到订阅列表
		subTxMap[subObj.hash] = subObj.op //订阅该交易
		//订阅该交易
		Fapiao.subscribe(FapiaoNode_Url + "/subscribe", "transactions", async function( /** @type {any[]} */
			result, /** @type {{ toString: () => any; }} */ error) {
			if (error) {
				util.log("订阅错误:", error.toString())
			}
			let tx = result[0]
			//获取临时存起来需要处理的交易
			let op = subTxMap[tx.tx_hash]
			switch (op) {
				case "send":
					util.log(tx)
					break;
				case "deploy":
					//如果部署成功获取合约信息
					if (tx.status === 1) {
						let cObjd = await getContract(tx.kid);
						util.log(cObjd)
					} else {
						//部署失败
						util.log(tx)
					}
					break;
			}
			//处理完毕删除掉
			delete subTxMap[tx.tx_hash]
			//打印一下交易日志
			util.log(tx)
		})
	}else{
		//来自本地测试环境
		//可直接调用接口获取交易详情
		...
	}
}
```