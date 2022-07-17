# Module-51: React Bootstrap, Tailwind CSS, Axios, Rechart

## 51.1 Module Introduction Use Bootstrap CDN in React

⫸ [Bootstrap setup](https://getbootstrap.com/ "Bootstrap Website | Include via CDN") | [Docs](https://getbootstrap.com/docs/5.2/getting-started/introduction/ "Bootstrap Website | Introduction to use of Bootstrap - Use Buttons, Cards etc.")
- `To use Bootstrap:` need to include ___CDN link → CSS stylesheets___
- Use ___className___ rather than ___class___
- Sometimes, we need to replace img src like `<img src="...">`
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
- Sometimes, we need to replace img src like `<img src="...">`
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

## 51.3 Setup tailwind CSS with Create React App

⫸ [Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides "Tailwind CSS | Installation: Framework Guides - Create React App") | [Install Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app "That time we use Framework, not CDN")

> It will be better to ___follow the instructions from there [website](https://tailwindcss.com/docs/guides/create-react-app "Install Tailwind CSS with Create React App | Recommended")___ rather than given below:

1. ___Create your project___

``` Terminal
npx create-react-app my-project
cd my-project
```

2. ___Install Tailwind CSS___
   - Install `tailwindcss` and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

``` Terminal
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. ___Configure your template paths___
   - Add the paths to all of your template files in your `tailwind.config.js` file

``` JavaScript
// Copy & paste only content section, other things will remain same as given.
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. ___Add the Tailwind directives to your CSS___
   - Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/index.css` file.
   - we can keep or remove all other code of `./src/index.css` file, as your wish.

``` CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. ___Start your build process___
   - Run your build process with `npm run start`.

``` Terminal
npm run start
```

6. ___Start using Tailwind in your project___
   - Start using Tailwind’s utility classes to style your content.

``` JavaScript
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

<center style="color:green">OR</center>

``` JavaScript
function App() {
  return (
    <div className="App">
      <h1 className='text-6xl'>Welcome to my pricing club</h1>
    </div>
  );
}
```


