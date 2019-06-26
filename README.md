This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 使用saga 做异步处理

> 1、引入
import createSagaMiddleware from 'redux-saga'

> 4、创建一个文件 sagas.js
> 5、引入这个文件
import todoSagas from './sagas';

> 2、创建一个saga
const sagaMiddleware = createSagaMiddleware()

> 3、使用中间件
const enhancer = composeEnhancers( applyMiddleware(sagaMiddleware))

> 6、通过sagaMiddleware运行这个文件。
sagaMiddleware.run(todoSagas);

### saga工作流程
component组件发送action->

saga中间件takeEvery接收到了action->

takeEvery会触发第二个参数（函数）->

函数把异步得到的数据，封装成action ->

发送给store(put 相当于store.dispatch) ->
store更新 state ->

返回给组件，渲染页面(store.subscribe 订阅store数据变化)

