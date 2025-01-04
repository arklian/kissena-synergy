import { HomePage } from "@kissena/pages/home/Home.page"

export const KissenaRoutes = [
    {
        index: true, 
        description: 'Home', 
        element: <HomePage/>
    },
    {
        path: 'content',
        description: 'some content',
        element: <div>Content! Behold!</div>
    }
]