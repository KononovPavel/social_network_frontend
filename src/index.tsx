import './index.css';
import reportWebVitals from './reportWebVitals';
import {reduxStore} from "./redux/redux-store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={reduxStore}>
        <App/>
    </Provider>,
    document.getElementById('root')
)


// просто чтобы отрисовалось первый раз
//слушаем функцию

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
