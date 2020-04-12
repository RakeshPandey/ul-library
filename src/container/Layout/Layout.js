import React from 'react';

import Header from '../../components/Header/Header.js';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary.js';
import Carousel from '../../components/UI/Carousel/Carousel';

const layout = (props) => {
    return (
        <Auxiliary>
            <Header />
            <main>
                <Carousel />
            </main>
        </Auxiliary>
    )
}

export default layout;