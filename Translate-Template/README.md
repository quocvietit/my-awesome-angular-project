# Setup env

## Install Bootstrap & Jquery
- `npm install bootstrap jquery --save`
- Add xpath to `.angular-cli.json` file:

```sh
    "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts": [
        "../node_modules/jquery/dist/jquery.min.js",
       "../node_modules/bootstrap/dist/js/bootstrap.min.js"
    ],
```

## Install primeng
- `npm install primeng --save`
- `npm install primeicons --save`
- `npm install @angular/animations --save`

```sh
   "styles": [
        "node_modules/primeicons/primeicons.css",
        "node_modules/primeng/resources/themes/omega/theme.css",
        "node_modules/primeng/resources/primeng.min.css",
    ],
```