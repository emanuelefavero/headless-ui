import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

// TIP: For a more complete example, see the Headless UI Listbox docs:
// https://headlessui.com/react/listbox

export default function Component() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <div className='w-56'>
      <Listbox
        as='div'
        className='rounded-lg'
        value={selectedPerson}
        onChange={setSelectedPerson}
      >
        <Listbox.Button>{selectedPerson.name} ⤵</Listbox.Button>
        <Listbox.Options className='w-full list-none focus:outline-none'>
          {people.map((person) => (
            <Listbox.Option
              className='hover:text-purple-700 cursor-pointer bg-white text-slate-700 px-3 py-1'
              key={person.id}
              value={person}
              disabled={person.unavailable}
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
