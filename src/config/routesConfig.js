import Home from 'views/Home';
import About from 'views/Home';
import cheatSheetsConfig from 'config/cheatSheetsConfig';
import {createCheatSheet} from 'components/CheatSheet';

const routes = {
    home: {
        path: '/',
        component: Home
    },
    about: {
        path: '/about',
        component: About
    },
    cheatSheets: {
        git: {
            path: '/cheat-sheet/git',
            component: createCheatSheet(cheatSheetsConfig.git)
        },
    }
};

export default routes;

