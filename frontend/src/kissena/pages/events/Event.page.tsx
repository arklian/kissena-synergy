import { PageContainer } from "@/kissena/components/PageContainer/PageContainer";
import { EventSelectorProvider, EventSelector } from "@/kissena/pages/events/EventSelector";
import { Event } from "@/kissena/components/Event/Event";
import { Stack } from "@mantine/core";

const placeholder = <>
<Event 
  title="The Curious Incident of the Dog in the Night-Time"
  location="Kissena Velodrome, Flushing NY"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  date={new Date()}
  startTime={new Date()}
  endTime={new Date()}
  
  team="green"
  partner="some-partner"
  learnMoreUrl="https://google.com"
  />
  <Event 
  title="The Curious Incident of the Dog in the Night-Time"
  location="Kissena Velodrome, Flushing NY"
  // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  date={new Date()}
  startTime={new Date()}
  endTime={new Date()}
  
  team="orange"
  partner="some-partner"
  // learnMoreUrl="https://google.com"
  />
  <Event 
  title="The Curious Incident of the Dog in the Night-Time"
  location="Kissena Velodrome, Flushing NY"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  date={new Date()}
  // startTime={new Date()}
  // endTime={new Date()}
  
  team="blue"
  partner="some-partner"
  learnMoreUrl="https://google.com"
  />
    <Event 
  title="The Curious Incident of the Dog in the Night-Time"
  location="Kissena Velodrome, Flushing NY"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  date={new Date()}
  // startTime={new Date()}
  // endTime={new Date()}
  
  team="partner"
  partner="some-partner"
  learnMoreUrl="https://google.com"
  />
</>

export function EventsPage() {
    return (
    <EventSelectorProvider>
        <PageContainer>
            <EventSelector />
            <Stack>
                {placeholder}
            </Stack>
        </PageContainer>
    </EventSelectorProvider>
    )
};