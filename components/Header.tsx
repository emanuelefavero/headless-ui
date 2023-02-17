import { Menu } from '@headlessui/react'

export default function Header() {
  return (
    <>
      <Menu as='div' className='w-100'>
        <Menu.Button className='hover:bg-purple-600 bg-purple-900 text-white border-purple-600 focus:outline-none'>
          More
        </Menu.Button>
        <Menu.Items className='right-0 p-2 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 text-purple-600 text-md ring-opacity-5 focus:outline-none'>
          <Menu.Item>
            {({ active }) => (
              <a className={`${active && 'text-purple-500'} mr-2`} href='/'>
                Home
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && 'text-purple-500'} mr-2`}
                href='/about'
              >
                About
              </a>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <span className='opacity-50 text-black'>Disabled Item</span>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  )
}
