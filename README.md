# http-status-codes-json

Nothing more, nothing less than
[the IANA registered HTTP status codes][^1]
in [JSON][^2] format.

# For posterity

```bash
npm install http-status-codes-json
```

```js
var codes = require('http-status-codes-json');
console.log(codes.200);
```

[^1]: <http://www.iana.org/assignments/http-status-codes/http-status-codes.xml>

[^2]: <http://json.org>
