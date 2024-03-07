# JSON-RPC

```bash
curl -X POST \
  http://fp-node-url:7399/jrpc \
  -H 'Content-Type: application/json' \
```

## fp_call
```json
{
  "jsonrpc": "2.0",
  "method": "fp_call",
  "params": {
    "kid": "kfc7b19b528298c3dfae6e588b91b40945eaec4ad56bc29bb92bc023860ee",
    "method":"$name",
    "args":[]
  },
  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```

```json
{
	"jsonrpc": "2.0",
	"result": {
		"data": "Tether USD"
	},
	"id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```


## bestBlockNumber
```json
{
  "jsonrpc": "2.0",
  "method": "bestBlockNumber",
  "params": {},
  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```

```json
{
	"jsonrpc": "2.0",
	"result": {
		"data": 2572780
	},
	"id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```

## getTransaction
```json
{
  "jsonrpc": "2.0",
  "method": "getTransaction",
  "params": {
    "hash":"efd7a5bfc05c04c1c18834abaf076c23980f059cb8283f250d622c11b8ae6a89"
  },
  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```

```json
{
	"jsonrpc": "2.0",
	"result": {
		"data": [
			{
				"height": 8528794,
				"tx_hash": "efd7a5bfc05c04c1c18834abaf076c23980f059cb8283f250d622c11b8ae6a89",
				"sender": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",
				"kid": "kfc4f97810c1410605d1a6c291b6054016faae8abcf141a78fdefc0ba7ea1",
				"op": "send",
				"input": "7b226b6964223a226b666334663937383130633134313036303564316136633239316236303534303136666161653861626366313431613738666465666330626137656131222c226d6574686f64223a226d696e74222c2261726773223a5b22324e37545972444b4e655a66346556475844564a79524b576150646278347176434a6a222c313030305d7d",
				"out": "true",
				"time_stamp": 1708528794,
				"status": 1
			}
		]
	},
	"id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```

## getEvents
```json
{
  "jsonrpc": "2.0",
  "method": "getEvents",
  "params": {
    "kid": "kfc4f97810c1410605d1a6c291b6054016faae8abcf141a78fdefc0ba7ea1",
    "fromBlock":"8528700",
    "toBlock": "8528700"
  },
  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```

```json
{
	"jsonrpc": "2.0",
	"result": {
		"data": [
			{
				"kid": "kfc4f97810c1410605d1a6c291b6054016faae8abcf141a78fdefc0ba7ea1",
				"tx_hash": "1e7da6905e93c53952a262e76b3c9197932eca9b9cfc016423c92948a356e1c3",
				"height": 8528700,
				"method": "mint",
				"name": "Transfer",
				"args": "7b22616d6f756e74223a313030302c2266726f6d223a2266617069616f2e6f7267222c22746f223a22324e37545972444b4e655a66346556475844564a79524b576150646278347176434a6a227d",
				"time_stamp": 1708528700
			}
		]
	},
	"id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```

## getBlockNumber
```json
{
  "jsonrpc": "2.0",
  "method": "getBlockNumber",
  "params": {
    "number": "8528700"
  },
  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```

```json
{
	"jsonrpc": "2.0",
	"result": {
		"data": [
			{
				"height": 8528700,
				"tx_hash": "1e7da6905e93c53952a262e76b3c9197932eca9b9cfc016423c92948a356e1c3",
				"sender": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",
				"kid": "kfc4f97810c1410605d1a6c291b6054016faae8abcf141a78fdefc0ba7ea1",
				"op": "send",
				"input": "7b226b6964223a226b666334663937383130633134313036303564316136633239316236303534303136666161653861626366313431613738666465666330626137656131222c226d6574686f64223a226d696e74222c2261726773223a5b22324e37545972444b4e655a66346556475844564a79524b576150646278347176434a6a222c313030305d7d",
				"out": "true",
				"time_stamp": 1708528700,
				"status": 1
			}
		]
	},
	"id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```


## abi
```json
{
  "jsonrpc": "2.0",
  "method": "abi",
  "params": {
    "kid": "kfcd266d91d0c96ca1cdc357f576571b26a662a7fa"
  },
  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```

```json
{
	"jsonrpc": "2.0",
	"result": {
		"data": {
			"abi": "[{\"name\":\"$name\",\"params\":[]},{\"name\":\"$symbol\",\"params\":[]},{\"name\":\"$baseUrl\",\"params\":[]},{\"name\":\"$balanceOf\",\"params\":[\"address\"]},{\"name\":\"$ownerOf\",\"params\":[\"tokenId\"]},{\"name\":\"$tokenURI\",\"params\":[\"tokenId\"]},{\"name\":\"$getApproved\",\"params\":[\"tokenId\"]},{\"name\":\"$isApprovedForAll\",\"params\":[\"owner\",\"operator\"]},{\"name\":\"mint\",\"params\":[\"data\"]},{\"name\":\"transfer\",\"params\":[\"to\",\"tokenId\"]},{\"name\":\"transferFrom\",\"params\":[\"from\",\"to\",\"tokenId\"]},{\"name\":\"approve\",\"params\":[\"to\",\"tokenId\"]},{\"name\":\"setApprovalForAll\",\"params\":[\"operator\",\"approval\"]}]",
			"kip": "K721"
		}
	},
	"id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```

## version
```json
{
  "jsonrpc": "2.0",
  "method": "version",
  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```

```json
{
	"jsonrpc": "2.0",
	"result": {
		"data": "1.0.0"
	},
	"id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```

