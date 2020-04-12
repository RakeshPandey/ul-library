import React from 'react';

import Header from '../../components/Header/Header.js';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary.js';
import Carousel from '../../components/UI/Carousel/Carousel';
import Cards from '../../components/UI/Cards/Cards';

const layout = (props) => {
    return (
        <Auxiliary>
            <Header />
            <main>
                <Carousel />
                <Cards />
            </main>
        </Auxiliary>
    )
}

export default layout;