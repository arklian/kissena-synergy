import styles from'@kissena/components/Announcement/Announcement.module.css'
import { Box, Button, Space, Stack, Text } from '@mantine/core'
import { useMemo } from 'react'

export interface AnnouncementData {
    title:string,
    datePosted:Date
    description?:string
    redirectUrl?:string
};

export function Announcement({title, datePosted, description, redirectUrl}:AnnouncementData) { 
    // Configure width of learn more button (and wrapper anchor tag)
    const buttonWidth = 120;

    // Format date to MM/DD/YYYY
    const stringifiedDate = useMemo(() => {
        return datePosted.toLocaleDateString('en-US')
    }, [datePosted])

    return (
        <Stack gap={0} pt={'lg'} pb={'xl'} className={styles.announcementContainer}>
            <Text size='md' c="neonGreen.6" fw={700} lh={'1.2rem'} lineClamp={2}>{title}</Text>
            <Text size='md' c="neonGreen.9">{stringifiedDate}</Text>

            
            {
                !description
                ? <></>
                : <>
                <Space h='xs'/>
                <Box className={styles.descriptionContainer}>
                    <Text size='md' c="lightYellow.1">{description}</Text>
                </Box>
                </>
            }

            {
                !redirectUrl
                ? <></>
                : <>
                <Space h='lg'/>
                <a href={redirectUrl} style={{ width: `${buttonWidth}px` }}>
                <Button classNames={{label: styles.buttonLabel}} size='sm' w={buttonWidth} color='darkGreen.4'>Learn More</Button>
                </a>
                </>
            }

        </Stack>
    )
}