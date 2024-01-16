---
sidebar_position: 9
---

# Hold tokens

## Interface overview

This interface provides the ability to obtain the list of tokens held under the address based on the wallet address.

## Request parameters

* `address`: 'Required parameter, wallet address'
* `page`: 'optional parameter, page number'

## Request example

### Request URL

`http://127.0.0.1:8765/api/holding/:address?page=1`

### Request method

GET

### Request sample parameters

* `address=2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj`


### Response example

```json
{
	"code": 200,
	"data": [{
		"owner": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",
		"symbol": "KUSDT",
		"kid": "kfc47abb2fbaa4c85cd388b2fcc4bd430ed152208563958d519944d327b26",
		"kip": "K20",
		"balance": "900000000",
		"unix": 1705027792
	}, {
		"owner": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",
		"symbol": "KGBK",
		"kid": "kfc30fb9fff39548558ead1b9ff3906dd7c11e77f7e9f4ef9d52f967334b4",
		"kip": "K20",
		"balance": "79000",
		"unix": 1705027881
	}, {
		"owner": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",
		"symbol": "K2",
		"kid": "kfc776b037f4e65e937ecd430bcd65981539f2ce49673a3ac957896847bab",
		"kip": "K20",
		"balance": "1000000",
		"unix": 1705049084
	}, {
		"owner": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",
		"symbol": "K2",
		"kid": "kfc207310e5fbfdfe1e513102384b7e0a4c10ae1ec6d627cdfd53a07c1247",
		"kip": "K20",
		"balance": "999800",
		"unix": 1705049420
	}, {
		"owner": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",
		"symbol": "K2",
		"kid": "kfcd66203839f94537e18da3c53a47a3515b1b948f86ed28a69a35eee0fd2",
		"kip": "K20",
		"balance": "99995999.9012349999",
		"unix": 1705052201
	}, {
		"owner": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",
		"symbol": "K2",
		"kid": "kfcab1f1224a55b5d75632ad4d670703035eef816370d87f319ff7317c9c0",
		"kip": "K20",
		"balance": "100000000",
		"unix": 1705055555
	}, {
		"owner": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",
		"symbol": "K2",
		"kid": "kfccb1e769cdc437284bb8f4f38a20c578712e0b1d5bcb22aecb012e1b836",
		"kip": "K20",
		"balance": "100000000",
		"unix": 1705055708
	}, {
		"owner": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",
		"symbol": "KI",
		"kid": "kfc13ceec6198faae4259f81b8bba9c775d5dbef33f6921c1d3511a54d750",
		"kip": "K10",
		"balance": "2000",
		"unix": 1705118174
	}, {
		"owner": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",
		"symbol": "KI",
		"kid": "kfcc1200fffb54b7c2ed0f6071c6daf0d7f8372e9f913c03bc97e3555c70e",
		"kip": "K10",
		"balance": "11999.001",
		"unix": 1705132205
	}, {
		"owner": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",
		"symbol": "KI",
		"kid": "kfc070870abab4417c1762f226887d4f507aced07baebccf599c1e2c5fc37",
		"kip": "K10",
		"balance": "75999.0009988424",
		"unix": 1705132413
	}, {
		"owner": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",
		"symbol": "K2",
		"kid": "kfc4c32f1711f0b834ffba863a95980752340280c82c49739c26c39abb2e3",
		"kip": "K20",
		"balance": "100000000",
		"unix": 1705132786
	}],
	"msg": "success"
}
```