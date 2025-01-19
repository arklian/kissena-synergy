import { AnnouncementData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getAnnouncements } from "@/api/announcements";
import { Stack, Text, Group, Divider, Box, ActionIcon, Button, Space, Skeleton, Loader } from "@mantine/core";
import { HEROTEXT_OFFSET_X } from "@kissena/pages/home/Home.page";
import styles from '@kissena/pages/home/AnnouncementBanner/Announcement.banner.module.css'
import { useMemo } from "react";

export function AnnouncementBanner() {
    // Retrieve latest announcement
    const { data:announcement, isLoading, isError } = useQuery<AnnouncementData>({
        queryKey: ["latestAnnouncement"],
        queryFn: () => {
          return getAnnouncements(0, 1).then(res => res[0])
        }
    });

    // Format date to MM/DD/YYYY
    const stringifiedDate = useMemo(() => {
        if (!announcement?.datePosted) { return ""; }
        return announcement.datePosted.toLocaleDateString('en-US')
    }, [announcement])

    const content = useMemo(() => {
        console.log(announcement);
        if (isError) {
            return <Text size="md">Whoops! Could not load the latest announcement.</Text>
        }
        if (isLoading) {
            return <Stack align="center">
                <Loader color={'darkGreen.6'} type="dots" />
            </Stack>
        }

    return (
        <>
            <Box visibleFrom="sm" className={styles.bannerContainer}>
                <Text size="md">New Announcement</Text>
                <Divider color="black" orientation="vertical" />
                <Group wrap="nowrap">
                    <Text size="sm" lh={'1rem'}>{stringifiedDate}</Text>
                    <Text lineClamp={1} size="md" fw={700}>{announcement?.title ?? ""}</Text>
                </Group>
                <ActionIcon variant="outline" color="black">+</ActionIcon>
            </Box>
            <Stack hiddenFrom="sm" gap={0}>
                <Text size="md">New Announcement</Text>
                <Box>
                    <Text lineClamp={2} size="md" fw={700}>{announcement?.title }</Text>
                    <Text size="md">{stringifiedDate}</Text>
                    <Space h={'sm'} />
                    <Button w={200} color="darkGreen.6">View Announcement</Button>
                </Box>
            </Stack>
        </>
        )
    }, [announcement, isLoading, isError])

    return (
        <Box mt={'md'} p={`1rem ${HEROTEXT_OFFSET_X}`} bg={"neonGreen.6"}>
            { content }
        </Box>
    )
}