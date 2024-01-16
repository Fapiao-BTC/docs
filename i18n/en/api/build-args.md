---
sidebar_position: 10
---

# Build parameters

## Interface overview

This interface provides the ability to convert contract interaction parameters into Hex and return them.

## Request parameters

```json
{
	"kid": "",
	"method": "",
	"args": []
}
```

## Request example

### Request URL

`http://127.0.0.1:8765/api/build/arg`

### Request method

POST

### Request sample parameters

```json
{
	"kid": "kfce4982e1f4703ba123238d9d28dcf70f7e97df49efeef7086392655512e",
	"method": "sendMethod",
	"args": [
		"12345"
	]
}
```


### Response example

```json
{
	"code": 200,
	"data": "7b226d6574686f64223a2273656e644d6574686f64222c2261726773223a5b223132333435225d2c226b6964223a226b666365343938326531663437303362613132333233386439643238646366373066376539376466343965666565663730383633393236353535313265227d",
	"msg": "success"
}
```