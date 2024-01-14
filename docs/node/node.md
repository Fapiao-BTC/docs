# 运行节点

## 下载地址

```bash
https://github.com/Fapiao-BTC/release/releases
```

## 配置项
`fp.json`
```json
{
  "network":2,
  "rpc":{
    "Host":"127.0.0.1:8334",
    "User": "vendersen",
    "Pass": "123456",
    "HTTPPostMode": true,
    "DisableTLS": false
  },
  "CertPath": "C:\\Users\\ec\\Desktop\\cersfile\\rpc.cert"
}

network：0是正式网 1是测试网 2是本地测试环境
rpc：基于Go语言的比特币全节点配置项[BTCD]
CertPath: rpc节点连接证书


运行本地测试环境时rpc、CertPath可为空
```