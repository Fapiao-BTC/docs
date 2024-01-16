# Quick Answer

### How to use the front end for contract interaction?

### TestNet || MianNet

#### `send || deploy`

```javascript

You can use the BTC related js library to build a Taproot transaction that complies with the Fp protocol rules and broadcast it to the chain.

//Script example
const script = [
	'Your Pubkey',
	'OP_CHECKSIG', 
	'OP_0', 
	'OP_IF', 
	ec.encode('fapiao.org'), 
	'01', 
	ec.encode('send' || 'deploy'), 
	'OP_0', 
	ec.encode('JavaScript Source Code' || JSON.stringify(callData)),
	'OP_ENDIF'
]

//OutAddress in TestNet: tb1qltgkhz7hkpmlezvdtdf9k07fgtxqrrdj546qy3
//OutAddress in MainNet: bc1qltgkhz7hkpmlezvdtdf9k07fgtxqrrdj7npnlz

const tx_data = await tapScript.Tx.create({
	version: 2,
	vin: [...],
	vout: [{
		value: 1000_00,
		// This is the new script that we are locking our funds to.
		scriptPubKey: tapScript.Address.toScriptPubKey('OutAddress')
	}]
})

```

:::caution
- **TestNet: tb1qltgkhz7hkpmlezvdtdf9k07fgtxqrrdj546qy3**
- **MainNet: bc1qltgkhz7hkpmlezvdtdf9k07fgtxqrrdj7npnlz**
:::


### TestNet || MianNet

#### `call`

```javascript
let callData = {
	kid: 'kid',
	method: 'method',
	args: [...args],
}

let arg = JSON.stringify(callData);

let hex = str2Hex(arg)

let data = {
	sender: account,
	source: hex
}

let response = await post(FapiaoNode_Url + "/call", data);

console.log(response);
```

### LocalNet

#### `send || deploy`

```javascript
//Send
let callData = {
	kid: 'kid',
	method: 'method',
	args: [...args],
}

let arg = JSON.stringify(callData);

let data = {
	sender: account,
	operation: "send",
	source: str2Hex(arg)
}

//Deploy
//npm install uglifyJS
let code = codeMinify(cScript)

let data = {
	sender: account,
	operation: "deploy",
	source: str2Hex(code)
}

let response = await post(FapiaoNode_Url + "/indexer", data);

console.log(response);

function codeMinify(code) {
	const options = {
		warnings: true,
		keep_fargs: true,
		keep_fnames: true
	};
	const result = uglifyJS.minify(code, options);
	if (result.error) throw result.error;
	return result.code
}
```

### LocalNet

#### `call`

```javascript
let callData = {
	kid: 'kid',
	method: 'method',
	args: [...args],
}

let arg = JSON.stringify(callData);

//Convert to hexadecimal string
let hex = str2Hex(arg)
//Build data
let data = {
	sender: account,
	source: hex
}

let response = await post(FapiaoNode_Url + "/call", data);

console.log(response);
```

### Where is the contract stored?

```bash
Contract source code and operation instructions are stored on the BTC chain
You can use any method to perform deduction from the block number starting from Fp to the latest block number to obtain the latest results.
```



### Who runs Fp’s nodes?

```bash
Anyone can run Fp node
```

### What is the native token of Fp?

```bash
We have not issued tokens and do not intend to
Please do not believe any projects that use Fp native tokens as their promotional slogans
```

### Follow-up plan

```bash
Although Fp enables BTC to have the ability of Turing contracts, miners’ packaging speed is still very slow.
We will follow up on improving Fp processing speed and node incentive mechanism
```