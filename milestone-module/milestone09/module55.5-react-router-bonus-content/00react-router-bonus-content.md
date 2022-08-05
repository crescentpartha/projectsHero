# Module 55.5: React Router Bonus Content

## 55.5.1 Recap use State hook with simple example

``` JavaScript
import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={increaseCount}>Click Me</button>
            <br />
            <h2>Count: {count}</h2>
            <p><small>Double Count: {count * 2}</small></p>
        </div>
    );
};

export default Home;
```

## 55.5.2 Connection between useEffect and useState

> Hooks are reusable functions.

⫸ `useState Hook:`

- The useState hook is used for ___storing variables___ that are part of your application's state and ___will change___ as the ___user interacts___ with your website.
- `const [state, setState] = useState(initialState);`
- initialState could be `[]` or `{}` or `''` or `""` or `0` or `100` or `state` of another useState hook.

⫸ `useEffect Hook:`

- The useEffect Hook is used for ___controlling the side-effects___.
- The useEffect hook allows components to react to lifecycle events such as ___mounting to the DOM___, ___re-rendering___, and ___unmounting___.
- Dependency Injection:
  - dependency could be `[]` or `[searchText]` or `[searchText, volunteers]` or `empty` ↪ (___run infinity times___)

⫸ `Custom Hook:`

- Custom Hooks are ___a mechanism to reuse stateful logic___, all state and effects inside of it are ___fully isolated___.
- Every hook start with ___use___.
- Implement in outside folder and ___export___ it. (___hooks/useVolunteers.js___)
- To use Custom Hook, we must ___import___ it.
- It increase the ___code reusability___
- Prevent ___code duplication___

## 55.5.3 Use custom hook to share hook code among components

⫸ `Custom Hook without dependency:`

``` JavaScript
import { useEffect, useState } from "react"

const useVolunteers = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setVolunteers(data));
    }, []); // dependency injection

    return [volunteers, setVolunteers];
}

export default useVolunteers;
```

⫸ `To Use ↪ Custom Hook without dependency:`

``` JavaScript
import useVolunteers from '../../hooks/useVolunteers';

const Main = () => {
    const [volunteers] = useVolunteers();
    // Or
    const [volunteers, setVolunteers] = useVolunteers();
}
```

## 55.5.4 Implement Search with simple code

⫸ `Search feature Implementation using Event Handler:`

``` JavaScript
import React, { useEffect, useState } from 'react';
import './Main.css';
import Activity from '../Activity/Activity';
import useVolunteers from '../../hooks/useVolunteers';

const Main = () => {
    const [volunteers] = useVolunteers();
    // const [searchResult, setSearchResult] = useState(volunteers); // initially set all volunteers data to set volunteers rather than [].
    const [searchResult, setSearchResult] = useState([]);

    const handleSearchChange = event => {
        // console.log(event.target.value);
        const searchText = event.target.value;
        const match = volunteers.filter(v => v.title.toLowerCase().includes(searchText));
        setSearchResult(match);
    }

    return (
        <div>
            <h2>Volunteer Activities: {searchResult.length}</h2>
            <div style={{'margin': '20px'}}>
                <input onChange={handleSearchChange} type="text" placeholder='search' />
            </div>
            <div className="activity-container">
                {
                    searchResult.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Main;
```

## 55.5.5 useEffect with dependency List

⫸ `Search feature Implementation using useEffect with dependency:` (___Best way___)

``` JavaScript
import React, { useEffect, useState } from 'react';
import './Main.css';
import Activity from '../Activity/Activity';

const Main = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect( () => {
        console.log('Inside the use Effect');
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            const match = data.filter(d => d.title.toLowerCase().includes(searchText));
            setSearchResult(match);
        })
    }, [searchText]); // dependency injection;

    const handleSearchChange = event => {
        setSearchText(event.target.value);
    }

    return (
        <div>
            <div style={{'margin': '20px'}}>
                <input onChange={handleSearchChange} type="text" placeholder='search' />
            </div>
            <div className="activity-container">
                {
                    searchResult.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Main;
```

⫸ [Imgur:](https://imgur.com "Imgur is the easiest way to discover and enjoy the magic of the Internet") is an ___image hosting___ and ___sharing___ site.

