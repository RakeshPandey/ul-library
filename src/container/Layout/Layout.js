import React from 'react';

import Header from '../../components/Header/Header.js';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary.js';
import Carousel from '../../components/UI/Carousel/Carousel';
import Cards from '../../components/UI/Cards/Cards';
import Modal from '../../components/UI/Modal/Modal';

const layout = (props) => {
    return (
        <Auxiliary>
            <Header />
            <main>
                <Carousel />
                <Cards />
                <Modal />
            </main>
        </Auxiliary>
    )
}

export default layout;