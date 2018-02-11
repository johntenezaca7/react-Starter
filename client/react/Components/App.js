import React, { Component } from 'react';
import { BrowserRouter, Route } from  'react-router-dom';

import Header from './Header';
const css = require('./App.scss');


class App extends Component {
    render(){
        return(
            <div>   
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route  exact path="/" render={() => {return(<div>NodeJS/ExpressJS!</div>)}}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
