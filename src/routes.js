import Home from './screens/Home';
import createCheatSheet from './CheatSheets/createCheatSheet';
import cheatSheetsConfig from './CheatSheets/cheatSheetsConfig';


console.log(cheatSheetsConfig);

const routes = {
    home: {
        path: '/',
        component: Home
    },
    about: {
        path: '/about'
    },
    cheatSheets: {
        path: '/cheat-sheet',
        git: {
            path: '/git',
            component: createCheatSheet(cheatSheetsConfig.git)
        },
        // docker: {
        //     path: '/docker'
        // },
        // elasticSearch: {
        //     path: '/elastic-search'
        // },
        // mongoDb: {
        //     path: '/mongo-db'
        // },
        // dotnetCli: {
        //     path: '/dotnet-cli'
        // },
        // aspNetCore: {
        //     path: '/asp-net-core'
        // },
        // bigO: {
        //     path: '/big-o'
        // },
        // rxjs: {
        //     path: '/rxjs'
        // }
    }
};

export default routes;

