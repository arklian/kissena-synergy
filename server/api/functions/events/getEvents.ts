import { Request, Response } from "express";


// Used for GET: /events/{entryCount}/{offset}/{startDate}/{endDate}?
export function getEvents(req: Request, res: Response) {
  console.log(req.params);
  res.send(sample);
}

const sample =
[
    {
        id: "1",
        title: "Forest Restoration",
        location: "Kissena Park",
        description: "Join us for a hands-on forest restoration project to improve the ecosystem of Kissena Park. Registration pending.",
        date: "02/08/2025",
        startTime: "02/08/2025, 11:00:00 AM",
        endTime: "02/08/2025, 12:00:00 PM",
        team: "green",
        partner: "",
        learnMoreUrl: "https://www.nycgovparks.org/reg/stewardship/16640"
    },
    {
        id: "2",
        title: "Forest Restoration",
        location: "Kissena Park",
        description: "Participate in an additional service day during NYC DOE mid-winter break to help restore the forest and preserve natural habitats. Registration pending.",
        date: "02/21/2025",
        startTime: "",
        endTime: "",
        team: "green",
        partner: "",
        learnMoreUrl: undefined
    },
    {
        id: "3",
        title: "Trails Maintenance",
        location: "Kissena Park",
        description: "Help maintain and improve the trails at Kissena Park to ensure they are safe and accessible for all visitors. Contact us to register.",
        date: "02/26/2025",
        startTime: "",
        endTime: "",
        team: "green",
        partner: "",
        learnMoreUrl: undefined
    },
    {
        id: "4",
        title: "Forest Restoration",
        location: "Kissena Park",
        description: "Contribute to the ongoing forest restoration efforts at Kissena Park, helping to plant trees and remove invasive species.",
        date: "02/28/2025",
        startTime: "",
        endTime: "",
        team: "green",
        partner: "",
        learnMoreUrl: "https://www.nycgovparks.org/reg/stewardship/16678"
    },
    {
        id: "5",
        title: "Forest Restoration",
        location: "Kissena Park",
        description: "Continue the mission to restore the forest at Kissena Park, ensuring the health and longevity of this vital urban green space. Registration pending.",
        date: "03/28/2025",
        startTime: "",
        endTime: "",
        team: "green",
        partner: "",
        learnMoreUrl: ""
    },
    {
        id: "6",
        title: "Non-native Plant ID and Removal",
        location: "Kissena Park",
        description: "Learn to identify non-native plants and join efforts to remove them, protecting native species and promoting biodiversity. Registration pending.",
        date: "03/30/2025",
        startTime: "03/30/2025, 11:00:00 AM",
        endTime: "",
        team: "green",
        partner: "",
        learnMoreUrl: ""
    },
    {
        id: "7",
        title: "Tree Giveaway",
        location: "Kissena Park",
        description: "Pick up free trees and learn about proper planting techniques to enhance your local environment and combat urban heat. Registration pending.",
        date: "04/20/2025",
        startTime: "04/20/2025, 02:00:00 PM",
        endTime: "04/20/2025, 04:00:00 PM",
        team: "green",
        partner: "",
        learnMoreUrl: ""
    },
    {
        id: "8",
        title: "Forest Restoration",
        location: "Kissena Park",
        description: "Support ongoing forest restoration projects by planting native trees and removing invasive species to improve biodiversity. Registration pending.",
        date: "04/25/2025",
        startTime: "",
        endTime: "",
        team: "green",
        partner: "",
        learnMoreUrl: ""
    },
    {
        id: "9",
        title: "Forest Restoration",
        location: "Kissena Park",
        description: "Join us to restore the forest at Kissena Park by planting trees, clearing debris, and revitalizing natural areas. Registration pending.",
        date: "05/30/2025",
        startTime: "",
        endTime: "",
        team: "green",
        partner: "",
        learnMoreUrl: ""
    },
    {
        id: "10",
        title: "Forest Restoration",
        location: "Kissena Park",
        description: "Participate in ongoing efforts to restore the health of the forest and promote a sustainable environment in Kissena Park. Registration pending.",
        date: "06/27/2025",
        startTime: "",
        endTime: "",
        team: "green",
        partner: "",
        learnMoreUrl: ""
    },
    {
        id: "11",
        title: "UA3 Food Pantry",
        location: "Grand St, NYC",
        description: "Contact us the NYC Location to participate",
        date: "01/27/2025",
        startTime: "",
        endTime: "",
        team: "partner",
        partner: "UA3",
        learnMoreUrl: ""
    },
    {
        id: "12",
        title: "Food Pantry",
        location: "Ozone Park, NY",
        description: "Participate in ongoing efforts to restore the health of the forest and promote a sustainable environment in Kissena Park. Registration pending.",
        date: "01/28/2025",
        startTime: "",
        endTime: "",
        team: "partner",
        partner: "MZ",
        learnMoreUrl: ""
    },
    {
        id: "1243",
        title: "Forestry Team QCP",
        location: "Kissena Park",
        description: "",
        date: "01/28/2025",
        startTime: "",
        endTime: "",
        team: "partner",
        partner: "MZ",
        learnMoreUrl: ""
    }
]
