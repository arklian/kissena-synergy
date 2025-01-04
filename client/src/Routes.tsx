import KissenaRoutes from "@kissena/Kissena.routes.tsx"
import HomePage from "@kissena/pages/home/Home.page.tsx";

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