import { HomePage } from '@kissena/pages/home/Home.page'
import { DemoPage } from '@kissena/pages/placeholder/Demo.page'
import { AnnouncementsPage } from '@kissena/pages/announcements/Announcements.page'
import { EventsPage } from '@kissena/pages/events/Event.page'
import TeamSection  from './pages/team/Member.Card'
import { AboutPage } from './pages/about/About.page'


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
    path: 'team',
    description: 'Meet the team',
    element: <TeamSection />
  },
  {
    path: 'about',
    description: 'About',
    element: <AboutPage />,
  },
  {
    path: 'placeholder',
    description: 'placeholder for future content',
    element: <DemoPage />,
  },
]
