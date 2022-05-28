# tailwind test project

## 2022.05.28 upgrade to React 18.0
1. upgrade React, React-dom, react-scripts version   
2. remove @craco/craco
3. change package.json   
before:
```
"start": "craco start",
"build": "craco build",
```
after:
```
"start": "react-scripts start",
"build": "react-scripts build",
```

## CRA 4.x
### install tailwind
`yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@\^7 autoprefixer@\^9`
### install and setting craco
install `yarn add @craco/craco`
setting
```
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

### postcss.config.js
```
module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-100vh-fix'),
    ]
}
```

### setting tailwind
tailwind.config.js `npx tailwindcss-cli@latest init`

### import tailwind
```
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### change package.json
before:
```
"start": "react-scripts start",
"build": "react-scripts build",
```
after:
```
"start": "craco start",
"build": "craco build",
```
