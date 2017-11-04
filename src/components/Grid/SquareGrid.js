import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

import asGrid from 'helpers/asGrid';
import './SquareGrid.css';

const NB_ELEMENTS_PER_ROW = 3;

const SquareGrid = ({data}) => {

    const elements = [
        {
            title: 'Git',
            logo: 'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png',
            route: '/cheat-sheet/git'
        }, {
            title: 'Docker',
            logo: 'https://giantswarm.io/static/img/partners/docker.svg?h=8d1dc18dd9ce883eef502240c' +
                    '8e762a5',
            route: '/cheat-sheet/git'
        }, {
            title: 'Elastic search',
            logo: 'https://www.elastic.co/static/images/elastic-logo-200.png',
            route: '/cheat-sheet/git'
        }, {
            title: 'dotnet cli',
            logo: 'https://docs.microsoft.com/fr-fr/dotnet/images/hub/netcore.svg',
            route: '/cheat-sheet/git'
        }, {
            title: 'mongoDB',
            logo: 'https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg',
            route: '/cheat-sheet/git'
        }, {
            title: 'rxjs',
            logo: 'https://avatars1.githubusercontent.com/u/984368?s=400&v=4',
            route: '/cheat-sheet/git'
        }
    ];

    const grid = asGrid(elements, NB_ELEMENTS_PER_ROW);

    const renderRow = (row, key) => <div key={`grid-row-${key}`} className="grid">
        {row.map((cell, j) => renderCell(cell, j))}
    </div>

    const renderCell = (cell, key) => <Link key={`grid-cell-${key}`} to={cell.route}>
        <div className="grid-cell grid-33">
            <div
                className="square square-100"
                style={{backgroundImage: `url(${cell.logo})`}}>
                <div className="title">
                    <h2>{cell.title}</h2>
                </div>
            </div>
        </div>
    </Link>

    return (
        <div>
            {grid.map((row, i) => renderRow(row, i))}
        </div>
    )
};

SquareGrid.propTypes = {
    data: PropTypes
        .arrayOf(PropTypes.object)
        .isRequired
};

export default SquareGrid;