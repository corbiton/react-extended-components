# React-extended-components 
#### A small collection of React reusable components to keep your JSX clean from conditional checks and JS code snippets

## Components

### ShouldRender
When you want to render elements conditionally 

```
    import { ShouldRender } from 'react-extended-components';

    const App = () => {

        return <div>
            <ShouldRender condition={1===1}>
                <h1>Conditionally rendered heading</h1>
                <h1>Conditionally rendered heading 2</h1>
            </ShouldRender>
        </div>
    }
```

#### Props
-------------------------------
| Name      |   Type   | Ex    |
|---------- | -------- |------ |
| condition | boolean  | 1===1 | 



### Branch
Analogous to If else statements in programming languages, Branch component helps you render some elements when the condition is true and some other elements when the condition is false

```
    import { Branch } from 'react-extended-components';

    const App = ()=>{

        return <div>
            <Branch condition={1===1}>
                <Branch.If>
                    <h1>Conditionally rendered heading in If Component</h1>
                </Branch.if>
                <Branch.Else>
                    <h1>Conditionally rendered heading in Else Component </h1>
                </Branch.Else>
            </Branch>
        </div>
    }
```

#### Props
-------------------------------
| Name      |   Type   | Example |
|---------- | -------- |---------|
| condition | boolean  | 1 === 1 | 


### Switch
Analogous to switch statement or if-else-if ladder in programming. Switch component supports an optional default case too.

```
import { Switch } from 'react-extended-components';

const App = ()=>{
    const val = 2;
        return <div>
            <Switch value={val}>
                <Switch.Case when={1}>
                    <h1>Heading 1</h1>
                </Switch.Case>
                <Switch.Case when={2}>
                    <h2>Heading 2</h2>
                </Switch.Case>
                <Switch.Case when={3}>
                    <h3>Heading 3</h3>
                </Switch.Case>
                <Switch.Default>
                    <h4>Default Heading</h4>
                </Switch.Default>
            </Switch>
        </div>
    }
```

#### Props
--------------------------------------------------------------------------------
| Name      |   Type                        | Usage                             |
|---------- | ------------------------------| --------------------------------- |
| value     | boolean/number/string/object  | ```<Switch value={x}> .. ```      |
| when      | boolean/number/string/object  | ```<Switch.Case when={1} ..  ```  |


### Map
Use Map component when you have container and presentation component setup in JSX and want to avoid javascript code snippets and keep your code clean.

#### Before
```
   import { useEffect, useState } from "react";
   import { Map } from 'react-extended-components';

    // presentation component
    const User = ({ user }) => {
        return <div>
            <h3>{user.login}</h3>
            <img src={user.avatar_url} width="100" height="100" />
        </div>
    };

    // container component
    const Users = () => {

        const [data, setData] = useState([]);

        useEffect(() => {
            axios.get('https://api.github.com/users')
                .then(res = setData(res.data))
                .catch(console.log)
        }, []);

        return <div>
            {
                data.map(user => <User user={user} key={user.login} />)
            }
        </div>
    };


    // consume Users container component
    const App = ()=>{
        return <Users />
    }
```


#### After

```
    import { useEffect, useState } from "react";
    import { Filter } from 'react-extended-components';

    // presentation component
    const User = ({ user }) => {
        return <div>
            <h3>{user.login}</h3>
            <img src={user.avatar_url} width="100" height="100" />
        </div>
    };

    // container component
    const Users = () => {

        const [data, setData] = useState([]);

        useEffect(() => {
            axios.get('https://api.github.com/users')
                .then(res = setData(res.data))
                .catch(console.log)
        }, []);

        const mapConfig = {
            items: data,
            id: 'login',
            dataKey: 'user',
            element: User
        };

        return <div>
            <Map config={mapConfig} />
        </div>
    };

    // consume Users container component
    const App = () => {
        return <Users />
    }
```

#### Props
| Name   | Field                    | Description                                                                                                                                              |
|--------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| config | id (string, optional)              | Any unique field from your data, this will be used as key for your container component. If not supplied index will be used as key |
|        | items (list, required)             | This is your dataset, it should be a list                                                                                                                |
|        | element (React component | Your container component reference, required)                                                                                                                      |
|        | dataKey (string,required)         | Name of the property your container component expects                                                                                                    |

Note: Apart from the above mentioned fields you can also send any custom fields as part of config object, Map component will honor these extra fields. For instance if you want to send a callback function to your container component you could do this

```
    const onDelete = ()=>{console.log('deleted');}

    <Map config={{id:'login',dataKey:'user',items:data,element:User,onUserDelete:onDelete}} />
```


### Filter
Filter component is very much similar to Map function except it renders only those items which satisfy a given predicate

```
const Users = () => {

        const [data, setData] = useState([]);

        useEffect(() => {
            axios.get('https://api.github.com/users')
                .then(res = setData(res.data))
                .catch(console.log)
        }, []);

        const filterConfig = {
            items: data,
            id: 'login',
            dataKey: 'user',
            element: User,
            // render only items with an even index
            predicate: (item,index,list)=>index%2===0
        };

        return <div>
            <Filter config={filterConfig} />
        </div>
    };
```

#### Props
| Name   | Field                    | Description                                                                                                                                              |
|--------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| config | id (string, optional)              | Any unique field from your data, this will be used as key for your container component. If not supplied index will be used as key |
|        | items (list, required)             | This is your dataset, it should be a list                                                                                                                |
|        | element (React component | Your container component reference, required)                                                                                                                       |
|        | dataKey (string, required)         | Name of the property your container component expects                                                                                                    |
|        | predicate ((item,index,list)=>boolean), required)     | Function to filter data, this function should return a boolean value                                                                                     |


Note: Just like Map component, Filter also honors any extra fields you send as part of config and will pass them to the container component. For instance if you want to send a callback to the container component you could do something like this

```
    const onDelete = () => {console.log('deleted');}
    const predicate= (ite,index) => index%2 === 0;

    <Filter config={{
            predicate,
            id:'login',
            dataKey:'user',
            items:data,
            element:User,
            onUserDelete:onDelete
        }} />

```