# de-html

De-html is a package to decode HTML encoded symbols in a string. It scans a string for HTML encoded codes and replaces them with the corresponding symbols.

## Installation & Usage

The package can be installed with 
```bash
npm install de-html
```
It can then be used in the code.

```javascript
import { decode } from 'de-html';

decode("This is a hashtag: &#35; "); // => This is a hashtag #
```

