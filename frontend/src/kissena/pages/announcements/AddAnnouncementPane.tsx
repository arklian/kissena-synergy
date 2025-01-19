import { useState } from "react";
import { Stack, TextInput, Button, Textarea, Space } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { postAnnouncement } from "@/api/announcements";

interface AddAnnouncementPaneProps {
    id?:string
}

export function AddAnnouncementPane({id}:AddAnnouncementPaneProps) {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [redirectLink, setRedirectLink] = useState<string>("");

    const mutateAnnouncement = useMutation({
        mutationFn: () => {
            return postAnnouncement(title, description, redirectLink, id ?? crypto.randomUUID())
        }
    })

    const onSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        mutateAnnouncement.mutateAsync()
        .then(() => {
            window.location.reload();
        })
        .catch(() => {
            alert("An error occured. Could not post the announcement.")
        })
    };

    return (
    <form onSubmit={onSubmit}>
    <Stack>
        <TextInput 
        variant="filled"
        label = "Title"
        description = "Enter a brief title for the announcement"
        placeholder='Your Title Here'
        size='md'
        value={title}
        onChange={(event) => setTitle(event.currentTarget.value)}
        
        required
        withAsterisk
        />
        <Textarea 
        variant='filled'
        description = "Enter a description for the announcement"
        label = "Description (Optional)"
        placeholder='Expand on the announcement content (optional)'
        size='md'

        value={description}
        onChange={(event) => setDescription(event.currentTarget.value)}
        />

        <TextInput 
        variant="filled"
        label = "Learn More Link (Optional)"
        description = 'Provide a link so readers can learn more (eg. "https://google.com")'
        placeholder= 'https://your-site-here.com'
        size='md'
        value={redirectLink}
        onChange={(event) => setRedirectLink(event.currentTarget.value)}
        />

        <Space />
        <Button type="submit" color='darkGreen.4' autoContrast>Create Event</Button>
    </Stack>
    </form>
    )
}