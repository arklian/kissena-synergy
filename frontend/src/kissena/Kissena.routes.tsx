import { HomePage } from '@kissena/pages/home/Home.page'
import { DemoPage } from '@kissena/pages/placeholder/Demo.page'
import { AnnouncementsPage } from '@kissena/pages/announcements/Announcements.page'
import { EventsPage } from '@kissena/pages/events/Event.page'
import { ResourcePage } from '@kissena/pages/resources/Resource.page'

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
    path: 'events',
    description: 'Events',
    element: <EventsPage />,
  },
  {
    path: 'resources',
    description: 'Resources',
    element: <ResourcePage />,
  },
  {
    path: 'placeholder',
    description: 'placeholder for future content',
    element: <DemoPage />,
  },
]
