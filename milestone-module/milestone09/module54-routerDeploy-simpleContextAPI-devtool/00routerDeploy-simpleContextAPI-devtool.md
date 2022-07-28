# Module 54: Router deploy, Simple Context API, devtool

## 54.0 Text Instruction

⫸ `About React-Router:`
1. How to ___set-up React-Router___. Just follow the ___5 steps___
2. How to set ___Not Found___ or ___404___ type route
3. How to ___set dynamic route___ and also ___set the path___ of dynamic route
4. In component, how can ___take a value___ from ___route parameter___ of ___dynamic route___.
5. ___Set route___ by clicking an ___Event Handler of Button___

⫸ `Some other Topies:` (covered)
- [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html "Conditional Rendering - reactjs.org") (3-4 system)
  - ___Conditional rendering___ in React works the same way conditions work in JavaScript.
  -  Use JavaScript operators like `if` or the `conditional operator` to create elements ___representing the current state___, and let React update the UI to match them.
- ___Data Sharing___ (secretly)
- ___Props Drilling___ [ [1](https://blog.logrocket.com/solving-prop-drilling-react-apps/#:~:text=Prop%20drilling%20is%20the%20unofficial,actual%20need%20for%20this%20data. "A better way of solving prop drilling in React apps - LogRocket.com") - [2](https://www.geeksforgeeks.org/what-is-prop-drilling-and-how-to-avoid-it/ "What is prop drilling and how to avoid it? - GeeksforGeeks.org") - [3](https://medium.com/swlh/avoid-prop-drilling-with-react-context-a00392ee3d8 "Avoid Prop Drilling with React Context - medium.com") - [4](https://dev.to/iamrishavraj1/what-is-react-prop-drilling-and-context-api-cjl "What is React Prop Drilling and Context API - dev.to") ]
  - Prop drilling is the ___unofficial term___ for ___passing data___ through several ___nested children components___.
  - The problem with this approach is that most of the components through which this data is passed have ___no actual need for this data___.
- [Context API](https://reactjs.org/docs/context.html "reactjs.org") (used for ___props drilling___)
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



