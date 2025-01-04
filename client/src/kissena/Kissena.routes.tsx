import HomePage from "@kissena/pages/home/Home.page.tsx"

const KissenaRoutes = [
    {
        index: true, 
        description: 'Home', 
        element: <HomePage/>
    },
    {
        path: 'new_page',
        description: 'New Page',
        element: <></>
    }
]

export default KissenaRoutes;