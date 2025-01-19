import { AnnouncementData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getAnnouncements } from "@/api/announcements";
import { Stack, Text, Divider, Box, ActionIcon, Button, Space } from "@mantine/core";
import { HEROTEXT_OFFSET_X } from "@kissena/pages/home/Home.page";
import styles from '@kissena/pages/home/AnnouncementBanner/Announcement.banner.module.css'

export function AnnouncementBanner() {
    // Retrieve latest announcement
    // const { data:announcement, isLoading, isError, refetch } = useQuery<AnnouncementData[]>({
    //     queryKey: ["latestAnnouncement"],
    //     queryFn: () => {
    //       return getAnnouncements(0, 1)
    //     }
    // });

    const announcement = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    return (
        <Box mt={'md'} p={`1rem ${HEROTEXT_OFFSET_X}`} bg={"neonGreen.6"}>
            <Box visibleFrom="sm" className={styles.bannerContainer}>
                <Text size="md">New Announcement</Text>
                <Divider color="black" orientation="vertical" />
                <Box w={'auto'}>
                    <Text lineClamp={1} size="md" fw={700}>{announcement}</Text>
                </Box>
                <ActionIcon variant="outline" color="black">+</ActionIcon>
            </Box>
            <Stack hiddenFrom="sm" gap={'sm'}>
                <Text size="md">New Announcement</Text>
                <Text lineClamp={2} size="md" fw={700}>{announcement}</Text>
                <Space />
                <Box w={200}>
                    <Button color="darkGreen.6">View Announcement</Button>
                </Box>
            </Stack>
        </Box>
    )
}