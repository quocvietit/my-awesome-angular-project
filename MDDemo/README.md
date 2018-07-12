# Setup ENV
## Install mdbootstrap
- `npm i angular-bootstrap-md --save`
- Add below line to `angular.json`:
```sh
    "styles": [
        "node_modules/font-awesome/scss/font-awesome.scss",
        "node_modules/angular-bootstrap-md/scss/bootstrap/bootstrap.scss",
        "node_modules/angular-bootstrap-md/scss/mdb-free.scss",
        "src/styles.scss"
    ],
    "scripts": [
    "node_modules/chart.js/dist/Chart.js",
    "node_modules/hammerjs/hammer.min.js"
    ],
```

## Install external libs
- `npm install -–save chart.js@2.5.0 font-awesome hammerjs angular5-csv `