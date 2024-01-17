# Run node

## download link

```bash
https://github.com/Fapiao-BTC/release/releases
```

## Configuration items
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

Network: 0 is the official network, 1 is the test network, 2 is the local test environment
rpc: Bitcoin full node configuration item based on Go language [BTCD]
CertPath: rpc node connection certificate


rpc and CertPath can be empty when running the local test environment
```


## Port

**Local**
 - Fp: 8765
 - InfluxDB: 9999

**TestNet**
 - Fp: 8763
 - InfluxDB: 8087

**MainNet**
 - Fp: 8761
 - InfluxDB: 8086