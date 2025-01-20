import { PageContainer } from "@/kissena/components/PageContainer/PageContainer";
import { EventSelector, EventSelectorMobile, EventSelectorProvider } from "@/kissena/pages/events/EventSelector";
import { EventList } from "@/kissena/pages/events/EventList";
import { Box } from "@mantine/core";

export function EventsPage() {
    return (
    <EventSelectorProvider>
        <PageContainer>
            {/* <Box visibleFrom="sm"> */}
            {/* <EventSelector /> */}
            {/* </Box> */}
            {/* <Box hiddenFrom=""> */}
            <EventSelectorMobile />
            {/* </Box> */}
            <EventList />
        </PageContainer>
    </EventSelectorProvider>
    )
};