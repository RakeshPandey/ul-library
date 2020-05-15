import React, { Component } from 'react';

import Carousel from '../../components/UI/Carousel/Carousel';
import Cards from '../../components/UI/Cards/Cards';

class Home extends Component {
    render () {
        return (
            <React.Fragment>
                <Carousel />
                <Cards />
            </React.Fragment>
        )
    }
}

export default Home;