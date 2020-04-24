import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import About from '../AboutUs/AboutUs';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Contact from '../ContactUs/ContactUs';

import Header from '../../components/Header/Header.js';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary.js';


const layout = (props) => {
    return (
        <Auxiliary>
            <Header />
            <main>
                
            </main>
            <Route path="/" exact component={Home} />
            <Switch>
                    <Route path="/home" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/services" component={Services} />
                    <Route path="/contacts" component={Contact} />
                </Switch>
        </Auxiliary>
    )
}

export default layout;