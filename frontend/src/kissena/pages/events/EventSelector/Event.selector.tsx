import {
  Button,
  Group,
  Title,
  Stack,
  Text,
  TextInput,
  Drawer,
  Divider,
  Checkbox,
} from '@mantine/core'
import { useContext, useState } from 'react'
import {
  allTeams,
  EventSelectorContext,
} from '@kissena/pages/events/EventSelector'
import { DatePicker } from '@mantine/dates'
import { Search, SlidersHorizontal } from 'lucide-react'
import styles from '@kissena/pages/events/EventSelector/Event.selector.module.css'
import { useDisclosure } from '@mantine/hooks'
import { KissenaTeamOptionData } from '@/types'

function SelectOptionMobile({
  label,
  description,
  color,
}: KissenaTeamOptionData) {
  return (
    <Stack gap={0}>
      <Text c={color} fw={700}>
        {label}
      </Text>
      <Text size="sm">{description}</Text>
    </Stack>
  )
}

export function EventSelector() {
  const [opened, { open, close }] = useDisclosure(false)
  const [searchBuffer, setSearchBuffer] = useState('')

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const {
    rangeStart,
    rangeEnd,
    setDateRange,
    setSearch,
    selectedTeams,
    toggleOption,
  } = useContext(EventSelectorContext)

  const today = new Date()
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const stringifyDate = (date: Date) => {
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()

    if (isToday) {
      return 'Today'
    }
    return date.toLocaleDateString('en-US', dateOptions)
  }

  return (
    <>
      <Stack gap={0} pb={'lg'}>
        <Title order={4} c={'neonGreen.9'}>
          Events
        </Title>
        <Group justify="space-between">
          <Title order={3} c="neonGreen.6">
            {stringifyDate(rangeStart)} - {stringifyDate(rangeEnd)}
          </Title>
          <Button
            hiddenFrom="xs"
            miw={'10rem'}
            flex={1}
            variant="light"
            onClick={open}
            rightSection={<SlidersHorizontal size={20} />}
          >
            Filter Events
          </Button>
          <Button
            visibleFrom="xs"
            variant="light"
            onClick={open}
            rightSection={<SlidersHorizontal size={20} />}
          >
            Filter Events
          </Button>
        </Group>
      </Stack>
      <Drawer
        padding={'lg'}
        title={
          <Title c={'darkGreen.4'} order={3}>
            Filter Events
          </Title>
        }
        position="right"
        opened={opened}
        onClose={close}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <Stack px={'1rem'}>
          <DatePicker
            size="lg"
            classNames={{ day: styles.datePickerDay }}
            allowDeselect={false}
            defaultDate={new Date()}
            className={styles.datePickerDay}
            value={selectedDate}
            onChange={(value) => {
              setSelectedDate(value)
              setDateRange(value ?? new Date())
              close()
            }}
          />

          <Divider />

          <TextInput
            size="md"
            label="Search Events"
            placeholder="Search a title or location..."
            value={searchBuffer}
            onChange={(event) => setSearchBuffer(event.target.value)}
            leftSection={<Search size={15} />}
          />
          <Button
            color="darkGreen.5"
            onClick={() => {
              setSearch(searchBuffer)
              close()
            }}
          >
            Search
          </Button>

          <Divider />
          <Title order={4} c="darkGreen.5">
            Event Teams
          </Title>

          <Stack gap={10}>
            {allTeams.map((teamOption: KissenaTeamOptionData) => (
              <Checkbox
                autoContrast
                key={teamOption.team}
                checked={selectedTeams.includes(teamOption)}
                onChange={() => toggleOption(teamOption)}
                label={<SelectOptionMobile {...teamOption} />}
              />
            ))}
          </Stack>
          <Button mt={'sm'} color={'darkGreen.5'} onClick={close}>
            Save
          </Button>
        </Stack>
      </Drawer>
    </>
  )
}
