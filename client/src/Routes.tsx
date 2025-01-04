import { KissenaRoutes } from "@kissena/Kissena.routes"
import { HomePage } from "@kissena/pages/home/Home.page";

const Routes = [
    // Base path for hosting the kissena website
    {
        path: '/',
        description: 'Home',
        element: <HomePage/>,
        children: KissenaRoutes,
    },
    {
        path: '*',
        description: ' 404 Not Found',
        element: <div>{'Whoops! 404!'}</div>
    }
]

export default Routes;