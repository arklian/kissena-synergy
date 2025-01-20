import { PageContainer } from "@/kissena/components/PageContainer/PageContainer";
import { EventSelector, EventSelectorProvider } from "@/kissena/pages/events/EventSelector";
import { EventList } from "@/kissena/pages/events/EventList";

export function EventsPage() {
    return (
    <EventSelectorProvider>
        <PageContainer>
            <EventSelector />
            <EventList />
        </PageContainer>
    </EventSelectorProvider>
    )
};