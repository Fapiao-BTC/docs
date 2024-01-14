# 快问快答


### 如何使用前端进行合约交互?

### TestNet || MianNet

#### `send || deploy`

```javascript

你可以使用BTC相关js库去构建一个符合Fp协议规则的Taproot交易,并将它广播上链.

//脚本示例
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

//交易对象
//OutAddress in TestNet: tb1pytjz9kryy8zf7p3s975j88xu0xt6e044a9v932eva5g9u5umdq7srt4skh
//OutAddress in MainNet: tb1pytjz9kryy8zf7p3s975j88xu0xt6e044a9v932eva5g9u5umdq7srt4skh

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
- **TestNet:  tb1pytjz9kryy8zf7p3s975j88xu0xt6e044a9v932eva5g9u5umdq7srt4skh**
- **MainNet:  tb1pytjz9kryy8zf7p3s975j88xu0xt6e044a9v932eva5g9u5umdq7srt4skh**
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

//再转为16进制字符串
let hex = str2Hex(arg)
//构建数据
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

//再转为16进制字符串
let hex = str2Hex(arg)
//构建数据
let data = {
	sender: account,
	source: hex
}

let response = await post(FapiaoNode_Url + "/call", data);

console.log(response);
```

### 合约存放在哪里？

```bash
合约源码及操作指令都存储在BTC链上
你可以用任何方式去从Fp开始的区块号到最新区块号,进行推演获取最新结果
```



### Fp的节点由谁运行?

```bash
任何人都可以去运行Fp节点
```

### Fp的原生代币是什么?

```bash
我们没有也不打算发行代币
请不要相信任何以Fp原生代币为宣传口号的项目
```

### 后续计划

```bash
虽然Fp使得BTC有图灵合约的能力,但矿工打包的速度依然很慢
我们将对提升Fp处理速度和节点激励机制展开后续
```