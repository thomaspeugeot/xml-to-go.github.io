# Working note

## sat september the 10th

```
npm i
make wasm
```

open file:///Users/thomaspeugeot/go/src/github.com/thomaspeugeot/xml-to-go.github.io/index.html

it works

```xml
<Note>
    <type>eighth</type>
</Note>
```

## simplification og html

### strange 

when i remove this line, it does not work anymore

!!!

```html
For an example, try converting XML from the <a href="javascript:void(0);" id="sample">Sample</a>
```

We have to ask Yaroslav

## exploration of the control flow

```html
    <script src="static/js/app.js"></script>
```

```js
import "./wasm/wasm_exec"
```

This file wasm_exec.js is a file provided by the GO team.






