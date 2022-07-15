# Module-51: React Bootstrap, Tailwind CSS, Axios, Rechart

## 51.1 Module Introduction Use Bootstrap CDN in React

⫸ [Bootstrap setup](https://getbootstrap.com/ "Bootstrap Website | Include via CDN") | [Docs](https://getbootstrap.com/docs/5.2/getting-started/introduction/ "Bootstrap Website | Introduction to use of Bootstrap - Use Buttons, Cards etc.")
- `To use Bootstrap:` need to include ___CDN link → CSS stylesheets___
- Use ___className___ rather than ___class___
- Sometimes, we need to replace img src like <`img src="...">`
- Sometimes, we need to do ___tag complete___ or ___closing tag___ like `<img />`
- Need to ___erase repetitions___, although it is wonderful for __plain Bootstrap__. In React, we use ___Component___ → ___similar in look, different in data___.
- Need to `import`, to use ___Card___, ___CardGroup___, ___Spinner___, ___Button___ etc.

⫸ `Include via CDN:` in ___public/index.html___ file.
``` HTML
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
```

⫸ `Keyboard Shortcuts:`
- `Ctrl + Shift + F` → ___Formatting code___
- `ctrl + F` → ___Search___
- `ctrl + F` + `class= | className=` → ___Toggle Replace___

## 51.2 Install React Bootstrap in your react application

⫸ [React Bootstrap](https://react-bootstrap.github.io/ "React-Bootstrap Website | The most popular front-end framework Rebuilt for React - Get started | (Easiest, Common, & Recommended System)") | [Get-started](https://react-bootstrap.github.io/getting-started/introduction "React-Bootstrap Website | Get started - Introduction: Use Buttons, Spinners, and Cards etc.")
- `To use React-Bootstrap:` need to ___install react-bootstrap___ and ___include CSS stylesheets___
- Use ___className___ rather than ___class___
- Sometimes, we need to replace img src like <`img src="...">`
- Sometimes, we need to do ___tag complete___ or ___closing tag___ like `<img />`
- Need to ___erase repetitions___, although it is wonderful for __plain Bootstrap__. In React, we use ___Component___ → ___similar in look, different in data___.
- Need to `import`, to use ___Card___, ___CardGroup___, ___Spinner___, ___Button___ etc.
- React-Bootstrap is the ___Easiest___, ___Common___, & ___Recommended System___.
  
⫸ `To use somethings with React: (Search type)`
- React Bootstrap
- React Tailwind
- React Font Awesome
- React Animation
- React pdf

⫸ `Installation:` ___React-Bootstrap___ install via the ___npm___ package

``` terminal
npm install react-bootstrap bootstrap
```

⫸ `Importing Components:`

``` JavaScript
import Button from 'react-bootstrap/Button'; // directly used Button

// or less ideally
import { Button } from 'react-bootstrap'; // from package - we use it mostly.
```

⫸ `Stylesheets: CSS`

``` JavaScript
{/* The following line can be included in your src/index.js or App.js file*/}

import 'bootstrap/dist/css/bootstrap.min.css';
```

⫸ `Why React-Bootstrap?`
- __React-Bootstrap__ is a complete re-implementation of the Bootstrap components using React. 
- It has __no dependency__ on either ___bootstrap.js___ or ___jQuery___. 
- If you have `React setup` and `React-Bootstrap installed`, you have everything you need.


