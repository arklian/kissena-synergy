import { useContext } from 'react';
import { ActionIcon, Box, Combobox, Divider, Group, Input, Pill, PillsInput, Portal, Stack, Text, useCombobox } from '@mantine/core';
import { EventSelectorContext } from '@kissena/pages/events/EventSelector';
import { OptionData } from '@/types';
import { allTeams } from '@kissena/pages/events/EventSelector';
import { ChevronDown } from 'lucide-react';

function SelectOption({team, label, description}:OptionData) {
    const resolveColor = () => {
        if (team === 'partner') return 'lightYellow.2';
        return team;
    }
    return (
        <Stack gap={0}>
            <Text c={resolveColor()} fw={700}>{label}</Text>
            <Text c="lightYellow.1" size='sm'>{description}</Text>
        </Stack>
    )
}

export function TeamSelect() {
  const { selectedTeams, toggleOption, removeOption } = useContext(EventSelectorContext);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const values = selectedTeams.map((option:OptionData) => (
    <Pill size='md' c={"lightYellow.0"} bg={option.color} key={option.team} withRemoveButton onRemove={() => removeOption(option)}>
      {option.label}
    </Pill>
  ));

  const options = allTeams.map((option:OptionData) => (
    <Combobox.Option 
    bd={"1px solid var(--mantine-color-darkGreen-4)"}
    bg={selectedTeams.includes(option) ? "darkGreen.5" : "darkGreen.6"} my={5} value={option.team} key={option.team} active={selectedTeams.includes(option)}>
      <Group gap="sm" wrap='nowrap'>
        
        <SelectOption {...option} />
      </Group>
    </Combobox.Option>
  ));

  return (
    <Group gap={0}>
    <Text size='md' c={"neonGreen.6"}>Event Teams</Text>
    <Divider ml="xs" orientation='vertical' color="darkGreen.5" />
    <Box w={{ base: 300, xs: 400, sm: 600, md: 800}} maw={800}>
    <Combobox store={combobox} onOptionSubmit={(selection:string) => toggleOption(allTeams.find(option => option.team === selection))} withinPortal={false}>
      <Combobox.DropdownTarget>
        <PillsInput variant='unstyled' p={"2 10"} pointer onClick={() => combobox.toggleDropdown()}>
          <Pill.Group >
          <ActionIcon visibleFrom='sm' variant='light' ><ChevronDown /></ActionIcon>
            {values.length > 0 ? (
                values
            ) : (
                <Input.Placeholder>Pick one or more values</Input.Placeholder>
            )}

            <Combobox.EventsTarget>
              <PillsInput.Field 
                type="hidden"
                onBlur={() => combobox.closeDropdown()}
                />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown bg={"darkGreen.6"} bd="none">
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
    </Box>
    </Group>
  );
}
