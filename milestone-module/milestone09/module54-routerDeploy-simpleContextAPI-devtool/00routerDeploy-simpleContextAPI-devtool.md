# Module 54: Router deploy, Simple Context API, devtool

## 54.0 Text Instruction

⫸ `About React-Router:`
1. How to ___set-up React-Router___. Just follow the ___5 steps___
2. How to set ___Not Found___ or ___404___ type route
3. How to ___set dynamic route___ and also ___set the path___ of dynamic route
4. In component, how can ___take a value___ from ___route parameter___ of ___dynamic route___.
5. ___Set route___ by clicking an ___Event Handler of Button___

⫸ `Some other Topies:` (covered)
- [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html "Conditional Rendering - reactjs.org") (3-4 different system)
  - ___Conditional rendering___ in React works the same way conditions work in JavaScript.
  -  Use JavaScript operators like `if` or the `conditional operator` to create elements ___representing the current state___, and let React update the UI to match them.
- ___Data Sharing___ (secretly)
- ___Props Drilling___ [ [1](https://blog.logrocket.com/solving-prop-drilling-react-apps/#:~:text=Prop%20drilling%20is%20the%20unofficial,actual%20need%20for%20this%20data. "A better way of solving prop drilling in React apps - LogRocket.com") - [2](https://www.geeksforgeeks.org/what-is-prop-drilling-and-how-to-avoid-it/ "What is prop drilling and how to avoid it? - GeeksforGeeks.org") - [3](https://medium.com/swlh/avoid-prop-drilling-with-react-context-a00392ee3d8 "Avoid Prop Drilling with React Context - medium.com") - [4](https://dev.to/iamrishavraj1/what-is-react-prop-drilling-and-context-api-cjl "What is React Prop Drilling and Context API - dev.to") ]
  - Prop drilling is the ___unofficial term___ for ___passing data___ through several ___nested children components___.
  - The problem with this approach is that most of the components through which this data is passed have ___no actual need for this data___.
- [Context API](https://reactjs.org/docs/context.html "reactjs.org") (used to avoid ___props drilling___)
- [Custom Active Link](https://reactrouter.com/docs/en/v6/examples/custom-link "reactjs.org")


## 54.1 Another Recap of Recap of React Router Setup

⫸ `Common Stuff:`
- React Router Setup
- Create Components
- Set Routes
- Custom Active Link
  - Used for ___styling the active link___ as like as (__underline__, __color__, __margin__, __padding__, __shadow__) etc.
  - ___Demo:___ [CustomLink.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone09/module54-routerDeploy-simpleContextAPI-devtool/01tshirt-mania/src/components/CustomLink/CustomLink.js)

``` JavaScript
// In CustomLink.js

return (
    <div>
    <Link
        style={{ textDecoration: match ? "underline" : "none", color: match ? 'orange' : 'black' }}
        to={to}
        {...props}
    >
        {children}
    </Link>
    {match && " (active)"}
    </div>
);
```

⫸ `For Styling in CSS files:` 
- `<Link>` tag converted to `<a>` tag, that's why used <a> 
- `<CustomLink>` converted to `<div>` tag, that's why used `<div>`
- ___Demo:___ [Header.css](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone09/module54-routerDeploy-simpleContextAPI-devtool/01tshirt-mania/src/components/Header/Header.css) → used ___Chrome devtool___ to ___view effect___


## 54.2 Recap Custom hook and load t-shirt data

⫸ `Custom Hook without dependency:` [useTShirts.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone09/module54-routerDeploy-simpleContextAPI-devtool/01tshirt-mania/src/hooks/useTShirts.js)

``` JavaScript
import { useEffect, useState } from "react"

// Custom Hook without dependency
const useTShirts = () => {
    const [tShirts, setTShirts] = useState([]);
    useEffect( () => {
        fetch('tshirts.json')
        .then(res => res.json())
        .then(data => setTShirts(data));
    }, []);
    return [tShirts, setTShirts];
}

export default useTShirts;
```

⫸ Custom Hook used in [Home.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone09/module54-routerDeploy-simpleContextAPI-devtool/01tshirt-mania/src/components/Home/Home.js) then [TShirt.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone09/module54-routerDeploy-simpleContextAPI-devtool/01tshirt-mania/src/components/TShirt/TShirt.js)


## 54.3 Recap Remove from cart and not allow duplicate

⫸ `Common Stuff Done:`
- [Home.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone09/module54-routerDeploy-simpleContextAPI-devtool/01tshirt-mania/src/components/Home/Home.js) → ([Cart.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone09/module54-routerDeploy-simpleContextAPI-devtool/01tshirt-mania/src/components/Cart/Cart.js) & [TShirt.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone09/module54-routerDeploy-simpleContextAPI-devtool/01tshirt-mania/src/components/TShirt/TShirt.js))
- set ___useState()___ for ___cart___
- ___handleAddToCart___
- ___handleRemoveFromCart___
- use ___rest operator___
- use ___Destructuring___
- use ___shortcut___ in ___cart___ ↓

``` JavaScript
// use shortcut in cart

return (
    <div>
        <h2>Items Selected in Cart: {cart.length}</h2>
        {
            cart.map(tShirt => <p>
                {tShirt.name}
                <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
            </p>)
        }
    </div>
);
```

## 54.4 Explore 4 ways to add Conditional Rendering in React

⫸ [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html "Conditional Rendering - reactjs.org") (4 different system) → [Cart.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone09/module54-routerDeploy-simpleContextAPI-devtool/01tshirt-mania/src/components/Cart/Cart.js)
- [Fragments](https://reactjs.org/docs/fragments.html "Fragments - React")
  - A common pattern in React is for ___a component___ to ___return multiple elements___.
  - Fragments let you ___group a list of children___ `without adding extra nodes` to the DOM.

``` JavaScript
// In Cart.js

// conditional rendering options
    // 01. Element variable
        // - element, we could make it as a single option, if (else if) condition is not needed.
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>Cart is empty!!!</h5>
            <p>Please, Add at least one item!!!</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p>Please, Add more...</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }

    // 02. ternary operator → condition ? true : false
        // - true (could be set): empty string, empty element, react fragments
        // - false (could be set): empty string, empty element, react fragments

    // 03. && Operator (shorthand) → true (render one)

    // 04. || Operator (shorthand) → false (render)

    return (
        <div>
            {command}
            {cart.length !== 4 ? <p>Keep adding...</p> : <button>Remove All</button>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Which gift are you giving three of them?</p>    
            </div>}
            {cart.length === 0 || <p className='orange'>YAY! You are buying.</p>}
        </div>
    );
```

## 54.5 Grandfather Create a Family Tree and share same data

## 54.6 Prop Drilling to pass data to a many level components

⫸ ___Prop Drilling___ is a Problem. 
- There is a ___solution___ called ___Context API___.

## 54.7 Simple Introduction to Context API to avoid Prop drilling

⫸ [Context API:](https://reactjs.org/docs/context.html "Context - React | Description about how to use Context API")
- ___One information___, we can share with ___multiple children component___.
- ___Context API___ is used to avoid ___Prop Drilling___.

⫸ `Uses of Context API:` (so powerful)
- To __avoid__ ___prop drilling___
- ___State Management___
- ___Theme uses___ purpose (dark theme, light theme)
- ___Website Translate___ (English to Bengali)

⫸ `Some Steps to use Context API:`
- Context ___declare___ & store in ___uppercase variable___ & ___export___ it
- All consumer need to ___wrap___ by using ___variable.Provider___
- Accepts a context object that ___returned value___ using ___useContext Hook___ and ___pass a contextName___

⫸ `Steps for Context API:`

1. [React.createContext](https://reactjs.org/docs/context.html#reactcreatecontext) 
   - Creates a ___Context object___. ___([Grandps.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone09/module54-routerDeploy-simpleContextAPI-devtool/01tshirt-mania/src/components/Grandpa/Grandpa.js "See the real demo of context API") & [Special.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone09/module54-routerDeploy-simpleContextAPI-devtool/01tshirt-mania/src/components/Special/Special.js "See the real demo of context API"))___

``` JavaScript
// Demo:
const MyContext = React.createContext(defaultValue);

// Example:
export const RingContext = createContext('Diamond');
```
2. [Context.Provider](https://reactjs.org/docs/context.html#contextprovider)
   - The Provider component accepts a ___value___ prop to be passed to consuming components that are descendants of this Provider.
   - One Provider can be connected to ___many consumers___.
   - Providers can be ___nested to override values___ deeper within the tree.
   - We can pass ___Single Value___, ___Static Value___, ___Dynamic Value___, ___Array___, ___Object___, ___Event Handler___, ___Function___ and ___Variable___ as a property-value of ___value___.

``` JavaScript
// Demo:
<MyContext.Provider value={/* some value */}>

// Or

<MyContext.Provider value={/* some value */}>

</MyContext.Provider>

/* ------------------------------------------- */

// Example:
<MyContext.Provider value='Alur Ring'>

</MyContext.Provider>

// Or → (dynamic value) pass

<MyContext.Provider value={ornament}>

</MyContext.Provider>

// Or → (dynamic value) pass

<MyContext.Provider value={[ornament2, house, setHouse]}>

</MyContext.Provider>
```

3. [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext "useContext Hook")
   - ___Accepts___ a ___context object___ (the value returned from React.createContext) and returns the ___current context value___ for that context.

``` JavaScript
// Demo:
const value = useContext(MyContext);

// Example:
const ring = useContext(RingContext);
```

## 54.8 Recap Context API and introduction to react dev tool

⫸ `Some Steps to use Context API:`
1. Call ___createContext___ with a ___default value___
2. Set a ___variable___ of the context with ___uppercase___
3. Make sure you ___export___ the context to use it in other places
4. ___Wrap___ your child content use ___variable.Provider___ (___RingContext.Provider___)
5. Provide a ___value___
   - we can pass ___dynamic value___ and ___static value___
6. To ___consume the context___ from child component
   - Use ___useContext hook___ and you will need to __pass__ the ___contextName___

---

⫸ `Setup Context API:`

``` JavaScript
// In Grandpa.js

import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';

export const RingContext = createContext('Diamond');

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornament2 = 'Golden Ring';

    return (
        <RingContext.Provider value={[ornament2, house, setHouse]}>
            <div className='grandpa'>
                <section style={{ display: 'flex' }}>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;
```

⫸ `Consume Context API:`

``` JavaScript
// In Aunty.js

import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [ornament2, house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h3>Aunty</h3>
            <p>House: {house}</p>
            <p><small>Gift: {ornament2}</small></p>
            <button onClick={() => setHouse(house + 1)}>Buy a House</button>
        </div>
    );
};

export default Aunty;
```

``` JavaScript
// In Uncle.js

import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [ , house, setHouse] = useContext(RingContext);
    // console.log(house);

    const handleHouseIncrease = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div>
            <h3>Uncle</h3>
            <p>House: {house}</p>
            <button onClick={handleHouseIncrease}>Buy A House</button>
        </div>
    );
};

export default Uncle;
```

⫸ [React Developer Tools:](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en "React devtool extensions")


## 54.9 Deploy react router project and fix router reload issue

``` JavaScript
// Dynamic {} | Conditional Rendering

{ house >= 4 && <button onClick={() => setHouse(house + 1)}>Buy a House</button>}

{ house < 3 || <button onClick={handleHouseIncrease}>Buy A House</button>}
```

⫸ `Page Not Found Error on Netlify:`
- Links: [1](https://dev.to/rajeshroyal/page-not-found-error-on-netlify-reactjs-react-router-solved-43oa "Page Not Found Error on Netlify Reactjs React Router solved - dev.to") - [2](https://rexben.medium.com/how-to-fix-page-not-found-on-netlify-with-react-router-dom-e0520692be5 "How to fix page not found on Netlify with react-router-dom - rexben.medium.com") - [3](https://stackoverflow.com/questions/58065603/netlify-renders-404-on-page-refresh-using-react-and-react-router "Netlify renders 404 on page refresh (using React and react-router) - stackoverflow.com") - [4](https://docs.netlify.com/configure-builds/file-based-configuration/ "File-based configuration - netlify.com") - [5](https://res.cloudinary.com/practicaldev/image/fetch/s--_GIAh5QE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://rajeshroyal.com/wp-content/uploads/2020/06/netlify-page-not-found-error-react-router-after-deploy.png "Page Not Found - Image")
- To fix the issue, we need to create a file named `_redirects` without extension inside the ___public folder___.
- `_redirects` file content: `/* /index.html 200`

``` JavaScript
/* /index.html 200
```


