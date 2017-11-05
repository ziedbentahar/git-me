import React from 'react';
import SquareGrid from 'components/Grid/SquareGrid';
import './Home.css';

const Home = props => {
    return (
        <div className="home">
            <header>
                <span className="header-title">Need a quick refresher ?</span>
            </header>
            <section>
                <SquareGrid />
            </section>
        </div>
    );
};

Home.propTypes = {};

export default Home;