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

<p style="color:green; text-align:center;">OR</p>

``` JavaScript
function App() {
  return (
    <div className="App">
      <h1 className='text-6xl'>Welcome to my pricing club</h1>
    </div>
  );
}
```

## 51.4 Responsive Navbar using React and Tailwind

⫸ [HeroIcons](https://heroicons.com/ "Beautiful hand-crafted SVG icons, by the makes of Tailwind CSS.") | [React + Vue Libraries](https://github.com/tailwindlabs/heroicons#react " High-quality SVG icons for you to use in your web projects")

> ___`To use HeroIcons:`___
1. ___First, install `@heroicons/react` from npm:___

``` Terminal
npm install @heroicons/react
```

2. ___Now each icon can be imported individually as a React component:___

``` JavaScript
import { BeakerIcon, MenuIcon, XIcon } from '@heroicons/react/solid';

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="h-5 w-5 text-blue-500"/>
      <MenuIcon></MenuIcon>
      <XIcon></XIcon>
      <p>...</p>
    </div>
  )
}
```

## 51.5 Simple Pricing Option using React and Tailwind

``` JavaScript
// Uses some Tailwind classes for creating beautiful UI

// Navbar.js
<nav className='bg-indigo-200'>
    <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
    </div>
    <ul className={`md:flex justify-center absolute md:static bg-indigo-200 w-full duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
    
    </ul>
</nav>

// Pricing.js
<div className='bg-indigo-300 p-4 mt-8'>
    <h1 className='text-6xl font-mono text-white'>Best Deals of the Town</h1>
    <div className='grid md:grid-cols-3 gap-3 mt-8'>
        
    </div>
</div>

// PricingOption.js
<div className='bg-white p-4 rounded-lg'>
    <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h2>
    <p>
        <span className='text-5xl font-bold'>{price}</span>
        <span className='text-xl font-bold text-gray-500'>/month</span>
    </p>
</div>
```

## 51.6 Responsive pricing card with Tailwind and Hero icons

``` JavaScript
// Uses some Tailwind classes for creating beautiful UI

// PricingOption.js
<div className='bg-white p-4 rounded-lg'>
    <div>
        <h3 className='text-xl text-left'>Benefits: </h3>
        {
            benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
        }
    </div>
    <button className='bg-green-500 flex justify-center w-full py-2 rounded mt-6 text-white hover:text-green-700 font-bold'>
        Buy Now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
    </button>
</div>

// Benefit.js
<p className='flex items-center'>
    <CheckCircleIcon className='w-4 h-4 text-green-500 mr-2'></CheckCircleIcon>
    {props.benefit}
</p>
```

## 51.7 Use rechart to draw any type of chart using React

⫸ [React Chart Libraries/Frameworks: 1](https://www.tabnine.com/blog/top-11-react-chart-libraries/ "Top 11 React Chart Libraries - tabnine") [2](https://aglowiditsolutions.com/blog/react-chart-libraries/ "Top React Chart Libraries to Visualize your Data in 2022 - GLOWID") [3](https://blog.logrocket.com/top-5-react-chart-libraries/ "Top 5 React chart libraries - LogRocket") [4](https://technostacks.com/blog/react-chart-libraries/ "Top 10 React Chart Libraries For Your Web Projects - TechnoStacks")
- [Recharts](https://recharts.org/en-US/ "A composable charting library built on React components") - [Getting Started](https://recharts.org/en-US/guide/getting-started "Recharts - Getting Started") - [API](https://recharts.org/en-US/api "Recharts - API") - [Examples](https://recharts.org/en-US/examples "Recharts - Examples | You can copy data from Examples and replace properties name") | [Installation](https://recharts.org/en-US/guide/installation "Installation - Recharts")

``` Terminal
npm install recharts
```

``` JavaScript
// MyLineChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
          name: 'Supplier A',
          price: 4000,
          sales: 2400,
          amt: 2400,
        },
        {
          name: 'Supplier B',
          price: 3000,
          sales: 1398,
          amt: 2210,
        },
    ];
      
    return (
        <LineChart width={800} height={500} data={data}>
            <Line dataKey={'price'} stroke="#8884d8"></Line>
            <Line type="monotone" dataKey={'sales'} stroke="#8884d8"></Line>
            <XAxis dataKey="name"></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>
        </LineChart>
    );
};

export default MyLineChart;
```

## 51.8 Axios, data extraction and data processing bar chart

⫸ [Axios](https://axios-http.com/docs/intro "Getting Started") - [GitHub](https://github.com/axios/axios "Axios - GitHub | Promise based HTTP client for the browser and node.js | It makes easy Promise's work")
- Axios ___simplify fetch's task___ and make more ___powerful___.
- ___Intercept the API call___ & give the header (___authorization header___)
- One piece of code ___intercept___ the API call and give the ___authorization code___.
- To data load, ___save the interaction time___ with latest server when fetch data.
- Axios is powerful for ___Error handling___ & ___parallel call___.
- axios → convert to JSON (___thyself___) → get Data (___2 lines code___) 
  - fetch → response → convert to JSON → get Data (___3 lines code___)
- For post request, ___don't need to tell___ about ___type___(JSON), ___method___(Post)


``` Terminal
npm install axios
```

``` JavaScript
// SpecialChart.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [phones, setPhones] = useState([]);
    useEffect( () => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(data => console.log(data.data.data));
        .then(data => {
            const loadedData = data.data.data;
            // const phoneData = loadedData.map(phone => phone.slug);

            // data extraction and data processing
            const phoneData = loadedData.map(phone => {
                const parts = phone.slug.split('-');
                const ph = {
                    name: parts[0],
                    value: parseInt(parts[1]) // create unique value by using split method
                };
                return ph;
            });
            setPhones(phoneData);
            // console.log(phoneData);
        });
    }, [])
    return (
        <BarChart width={800} height={500} data={phones}>
          <Bar dataKey="value" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>
        </BarChart>
    );
};

export default SpecialChart;
```

## 51.9 Module Summary and React spring animation

⫸ `Use React-Tailwind framework`
- make powerful ___customization___ 
- use ___theme in configuration___ 
- ___custom code___ and much more
- Search: __React pdf__ | __React google map__ | __React animation__

⫸ [React-Animation](https://reactjs.org/docs/animation.html "Animation Add-Ons - React")
- `H.W.` Find out new Libraries which is included with ___React-Bootstrap___ or ___React-Tailwind___
- [5 Ways to animate a React app](https://medium.com/hackernoon/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf "mediuum.com")
- [react-spring](https://react-spring.dev/ "React Spring Animation") -&- [Basics](https://react-spring.dev/basics#basics "Getting Started - react-spring")

___Installation:___
``` Terminal
npm install react-spring
```

___Basics:___
``` JavaScript
// First, you fetch your imports
import { useSpring, animated } from 'react-spring'

function App() {
  // Next, define your spring
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  // Finally, tie the animated values to your view
  return <animated.div style={props}>I will fade in</animated.div>
}
```

___Example:___
``` JavaScript
// App.js

import { useSpring, animated } from 'react-spring';
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false);

  const props = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  })

  return (
    <div className="App">
      <animated.div className="text-4xl font-bold m-6" style={props}>Crescent Partha</animated.div>
    </div>
  );
}

export default App;
```

## `Quiz`

1. How will you declare a button with primary color using React Bootstrap?
   - `<Button variant="primary">Click Me</Button>`
2. Where should you add a bootstrap CDN link in a React Application?
   - In `index.html`
3. Which bootstrap class will you use to make images responsive? (don’t forget basic bootstrap)
   - `img-fluid`
4. Why do we use fragments in react? (google it)
   - ___It lets you group a list of children without adding extra nodes to the DOM.___
5. How we can toggle the boolean state in react?
``` JavaScript
const [state, setState] = useState(false)
```
- `setState(!state)`
6. The Bootstrap grid system is based on how many columns?
   - ___12___
7. import  ___?___  from “react-bootstrap”
   - `{Row}`
8. What will you get in return if you  call isAdmin(true)?
``` JavaScript
function isAdmin( user) {
 return (  user ? 'Admin' : 'Normal User');
}
```
- `"Admin"`
9. Which react-bootstrap component you will use for width: 100% across all viewport and device sizes. (check the documents)
   - `<Container fluid />`
10. What is recharts?
    - ___A composable charting library built on React components___
11. How we can set dynamic class names in react? 
    - `className={isRed ? "red" : "blue"}`
    - ___className={`card-container ${isRed ? "red" : "blue"}`}___
12. What is react-spring?
    - ___An animation library for react___
13. Where we should add `@tailwind base;` `@tailwind components;` `@tailwind utilities;` when initializing a project with tailwind.
    - Inside `index.css`
14. How we can use the shorthand version for Cards with body only, and no other children?
    - `<Card body> </Card>`
15. How we can create a fade in animation using react spring ?
    - `useSpring({ to: {opacity: 1 }, from: {opacity: 0 } })`

