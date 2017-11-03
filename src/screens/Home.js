import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';

const Home = props => {
    return (
        <div className="home">
            <header>
                <span className="header-title">Need a quick refresher ?</span>
            </header>
            <section>
                <div className="grid">
                    <div className="grid-cell grid-33">
                        <div className="square two square-100">
                            <div className="title">
                                <h2>Colour series: tweaking your palette</h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid-cell grid-33">
                        <div className="square four square-100">
                            <div className="title">
                                <h2>Colour series: picking your palette</h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid-cell grid-33">
                        <div className="square three square-100">
                            <div className="title">
                                <h2>Feature detection with CSS</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid">
                    <div className="grid-cell grid-25">
                        <div className="square one square-100">
                            <div className="title">
                                <h2>11 resources for colour inspiration</h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid-cell grid-25">
                        <div className="square two square-100">
                            <div className="title">
                                <h2>Browse content efficiently with toggling horizontal scrolling</h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid-cell grid-25">
                        <div className="square three square-100">
                            <div className="title">
                                <h2>A year in writing – 2015</h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid-cell grid-25">
                        <div className="square four square-100">
                            <div className="title">
                                <h2>Colour series: adding new colours & tips</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

Home.propTypes = {};

export default Home;