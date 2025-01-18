import { Request, Response } from "express";

const sampleAnnouncements = [
   {
    title: "System Maintenance Scheduled",
    datePosted: new Date("2025-01-15"),
    description: "The system will be undergoing maintenance on January 20th from 12:00 AM to 4:00 AM. Please plan accordingly.",
    redirectUrl: "https://example.com/maintenance-details",
  },
  {
    title: "New Feature Release: Dark Mode",
    datePosted: new Date("2025-01-14"),
    description: "We’ve added dark mode! Update your preferences to enable it.",
    redirectUrl: "https://example.com/dark-mode",
  },
  {
    title: "Upcoming Webinar: Productivity Tips",
    datePosted: new Date("2025-01-13"),
    description: "Join us for a webinar on productivity tips and tools on January 25th.",
    redirectUrl: "https://example.com/webinar-signup",
  },
  {
    title: "Office Closure on January 16th",
    datePosted: new Date("2025-01-12"),
    description: "Our office will be closed on January 16th in observance of a public holiday.",
  },
  {
    title: "Bug Fixes and Improvements",
    datePosted: new Date("2025-01-11"),
    description: "We’ve resolved several reported bugs to improve your experience.",
    redirectUrl: "https://example.com/release-notes",
  },
  {
    title: "Survey: Share Your Feedback",
    datePosted: new Date("2025-01-10"),
    description: "We’d love to hear your thoughts! Fill out our survey and help us improve.",
    redirectUrl: "https://example.com/survey",
  },
  {
    title: "Monthly Newsletter Released",
    datePosted: new Date("2025-01-09"),
    description: "Check out the latest updates and news in this month’s newsletter.",
    redirectUrl: "https://example.com/newsletter",
  },
  {
    title: "Employee Spotlight: January Edition",
    datePosted: new Date("2025-01-08"),
    description: "Get to know our January Employee of the Month!",
  },
  {
    title: "Reminder: Update Your Profile",
    datePosted: new Date("2025-01-07"),
    redirectUrl: "https://example.com/update-profile",
  },
  {
    title: "Community Event: Charity Run",
    datePosted: new Date("2025-01-06"),
    description: "Join us for a charity run to support local organizations on February 3rd.",
    redirectUrl: "https://example.com/charity-run",
  },
];

// Used for GET: /announcements/latest/{offset}/{entryCount}
export function getAnnouncements(req: Request, res: Response) {
  res.send(sampleAnnouncements);
}
