import { Event } from "@/kissena/components/Event/Event";
import { PageContainer } from "@/kissena/components/PageContainer/PageContainer";

export function DemoPage() {
  return <PageContainer>
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
  
  </PageContainer>
}
