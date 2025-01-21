import { HomePage } from '@kissena/pages/home/Home.page'
import { DemoPage } from '@kissena/pages/placeholder/Demo.page'
import { AnnouncementsPage } from './pages/announcements/Announcements.page'

export const KissenaRoutes = [
  {
    index: true,
    description: 'Home',
    element: <HomePage />,
  },
  {
    path: 'announcements',
    description: 'Announcements',
    element: <AnnouncementsPage />,
  },
  {
    path: 'placeholder',
    description: 'placeholder for future content',
    element: <DemoPage />,
  },
]
