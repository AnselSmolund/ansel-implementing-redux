
# Ansel Smolund's Implementation of Redux for Volt Athletics 
![2021-06-18 09 39 00](https://user-images.githubusercontent.com/21230355/122578138-352f8a80-d019-11eb-9282-01db081c68d3.gif)


Below is a screenshot of all the tests passing. I have added a few to ensure the correctness of the implementation. 

<img width="570" alt="Screen Shot 2021-06-18 at 9 34 05 AM" src="https://user-images.githubusercontent.com/21230355/122577460-6e1b2f80-d018-11eb-8c28-8bb742388b02.png">


## Install dependencies

```bash
> yarn
```

## Run the tests

Start the tests with:

```bash
> yarn test --watch
```

Read through the [test cases](implementing-redux/__tests__/tests.spec.js) and implement the required logic in `implementing-redux/index.js`

## Wire it all up

From the root of the project run

```bash
> npx serve
```

Then go to `http://localhost:5000/implementing-redux/counter` in your address bar. In the file `implementing-redux/counter.js`, see if you can do the following:

- hook up your implementation of Dedux to the elements in `counter.html`
- have the counter reflect a value stored in your Dedux state
- when the up button is pushed, the counter should increase
- when the down button is pushed, the counter should decrease
- when the reset button is pushed, the counter should reset to zero
- **Bonus**: add a middleware to your store which will persist the latest count to localstorage and set up your initial state to use this value
