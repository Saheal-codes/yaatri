import { Fragment } from 'react'
import { useState } from "react";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Notification from './Utility/Notifications'
import Profile from './Utility/Profile';
import Messagebox from './Utility/Messagebox';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function PrimaryBar() {

    const [notification, setNotification] = useState(false);
    const [profileshow, setProfileshow] = useState(false);
    const [messageshow, setMessageshow] = useState(false);

    console.log({notification,profileshow,messageshow})

    return (
        <Disclosure as="header" className="bg-white shadow sticky top-0 z-20">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-full px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
                        <div className="relative flex h-16 justify-between">
                            <div className="relative z-10 flex px-2 lg:px-0">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src="./images/yaatri.png"
                                        alt="Your Company"
                                    />
                                </div>
                            </div>
                            <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                                <div className="w-full sm:max-w-xs">
                                    <label htmlFor="search" className="sr-only placeholder:italic placeholder:text-slate-400">
                                        Search your favourite groups for a new adventure
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="search"
                                            name="search"
                                            className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10 flex items-center md:hidden">
                                {/* Mobile menu button */}
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="hidden md:relative md:z-30 md:ml-4 md:flex md:items-center">
                                {<Notification {...{ notification, setNotification, profileshow, setProfileshow, setMessageshow }}
                                    className={`${notification ? '' : "hidden"} relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                                />}
                                {!messageshow && <Profile {...{ profileshow, setProfileshow, setNotification }} />}
                                <Messagebox {...{messageshow, setMessageshow, profileshow, setNotification,setProfileshow}} />
                                <span className="sr-only">View notifications</span>
                                <button
                                    onClick={() => setNotification(true)}
                                >
                                    <BellIcon className="h-6 w-6 cursor-pointer" aria-hidden="true"
                                    />
                                </button>
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-4 flex-shrink-0 flex items-center">
                                    <div>
                                        <MenuButton className="relative flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                        </MenuButton>
                                    </div>
                                    <Transition
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <MenuItems className="absolute top-10 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <MenuItem key={item.name}>
                                                    {({ focus }) => (
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                focus ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </MenuItem>
                                            ))}
                                        </MenuItems>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <DisclosurePanel as="nav" className="md:hidden z-20 bg-white" aria-label="Global">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                        'block rounded-md py-2 px-3 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pb-3 pt-4">
                            <div className="flex items-center px-4">
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">{user.name}</div>
                                    <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                </div>
                                <button
                                    type="button"
                                    className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                                {userNavigation.map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                            </div>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}
