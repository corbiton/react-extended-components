# Reactive: 
### A small collection of React reusable components to keep your JSX clean from conditional checks and JS code snippets

## Components


### ShouldRender
When you want to render elements conditionally 

```
    import {ShouldRender} from 'reactive';

    const App = () => {

        return <div>
            <ShouldRender condition={1===1}>
                <h1>Conditionally rendered heading</h1>
                <h1>Conditionally rendered heading 2</h1>
            </ShouldRender>
        </div>
    }
```

Props
-------------------------------
| Name      |   Type   | Ex    |
|---------- | -------- |------ |
| condition | boolean  | 1===1 | 



### Branch
Analogous to If else statements in programming languages, Branch component helps you render some elements when a condition is true and some other elements when the condition is false

```
    import {ShouldRender} from 'reactive';

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

Props
-------------------------------
| Name      |   Type   | Ex    |
|---------- | -------- |------ |
| condition | boolean  | 1===1 | 


### Switch
Analogous to switch statement or if-else-if ladder in programming. Switch component supports an optional default case too.

```
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

Props
------------------------------------------------------------------------
| Name      |   Type                        | Ex                         |
|---------- | ------------------------------| -------------------------  |
| value     | boolean/number/string/object  | <Switch value={val}> ..    |
| when      | boolean/number/string/object  | <Switch.Case when={1} ..   |