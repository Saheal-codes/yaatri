import { Fragment, useState } from 'react'
import {
  Dialog, DialogPanel, DialogTitle, Transition, TransitionChild, MenuItem, Menu,
  MenuButton,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
// import { useSelector, useDispatch } from "react-redux";
// import { converterStatefrom } from "../../reducer/reducer1";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';


const team = [
  {
    name: 'Leslie Alexander',
    handle: 'Added you back!',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
    profileLink: "/lesliealexander",
  },
  {
    name: 'Tom Cook',
    handle: 'Liked your Post',
    status: 'Online',
    email: 'tom.cook@example.com',
    href: '#',
    profileLink: "/tomcook",
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Whitney Francis',
    handle: 'Commented on your Post',
    status: 'Online',
    email: 'whitney.francis@example.com',
    href: '#',
    profileLink: "/whitneyfrancis",
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leonard Krasner',
    handle: 'Shared your Post',
    status: 'Online',
    profileLink: "/leonardkrasner",
    email: 'leonard.krasner@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    handle: 'Shared your Post',
    status: 'Online',
    profileLink: "/floydmiles",
    email: 'floyd.miles@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Selman',
    handle: 'Commented on your Post',
    status: 'Online',
    profileLink: "/emilyselman",
    email: 'emily.selman@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: "All caught up with Notifications",
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Notification({ notification, setNotification, profileshow, setProfileshow, setMessageshow }) {

  return (
    <Transition show={notification}>
      <Dialog className="relative z-10" onClose={setNotification}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <TransitionChild
                enter="transform transition ease-in-out duration-300 sm:duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="bg-blue-400 px-4 py-6 sm:px-6">
                        <div className="flex flex-grow items-center justify-between">
                          <div></div>
                          <DialogTitle className="text-base font-semibold leading-6 text-white">
                            Notifications
                          </DialogTitle>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative rounded-md bg-blue-400 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => setNotification(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-gray-200 px-4 sm:px-6">
                          <ul className="flex-1 divide-y divide-gray-200 overflow-y-auto">
                            {team.length > 0 ? team.map((person) =>
                            // link = person.profileLink
                            (
                              <li key={person.handle}>
                                <div className="group relative flex items-center px-5 py-6">
                                  <a href={person.href} className="-m-1 block flex-1 p-1">
                                    <div className={`absolute inset-0 ${person.imageUrl ? "group-hover:bg-gray-100" : ""} rounded-lg`} aria-hidden="true" />
                                    <div className="relative flex min-w-0 flex-1 items-center">
                                      <span className="relative inline-block flex-shrink-0">
                                        {person.imageUrl ? (<><img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                                          <span
                                            className={classNames(
                                              person.status === 'online' ? 'bg-green-500 animate-bounce  ease-in-out' : 'bg-gray-300',
                                              'absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white '
                                            )}
                                            aria-hidden="true"
                                          />
                                        </>
                                        ) : (<CheckCircleRoundedIcon />)}
                                      </span>
                                      <div className="ml-4 truncate">
                                        <p className="truncate text-sm font-medium text-gray-900">{person.name}</p>
                                        <p className="truncate text-sm text-gray-500">{person.handle}</p>
                                      </div>
                                    </div>
                                  </a>
                                  {person.imageUrl ? (
                                    <>
                                      <Menu as="div" className="relative ml-2 inline-block flex-shrink-0 text-left">
                                        <MenuButton className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-offset-2">
                                          <span className="absolute -inset-1.5" />
                                          <span className="sr-only">Open options menu</span>
                                          <span className="flex h-full w-full items-center justify-center rounded-full">
                                            <EllipsisVerticalIcon
                                              className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </MenuButton>
                                        <Transition
                                          enter="transition ease-out duration-50"
                                          enterFrom="transform opacity-0 scale-95"
                                          enterTo="transform opacity-100 scale-100"
                                          leave="transition ease-in duration-50"
                                          leaveFrom="transform opacity-100 scale-100"
                                          leaveTo="transform opacity-0 scale-95"
                                        >
                                          <MenuItems className="absolute right-9 top-0 z-10 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                              <MenuItem>
                                                {({ focus }) => (
                                                  <div
                                                    className={classNames(
                                                      focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                      'block px-4 py-2 text-sm cursor-pointer'
                                                    )}
                                                    onClick={() => {
                                                      setProfileshow(person)
                                                      setNotification(false)
                                                    }}
                                                  >
                                                    View profile
                                                  </div>
                                                )}
                                              </MenuItem>
                                              <MenuItem>
                                                {({ focus }) => (
                                                  <div
                                                    className={classNames(
                                                      focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                      'block px-4 py-2 text-sm cursor-pointer'
                                                    )}
                                                    onClick={()=>{
                                                      setMessageshow((prev)=>prev=!prev)
                                                      setProfileshow(person)
                                                    }}
                                                  >
                                                    Send message
                                                  </div>
                                                )}
                                              </MenuItem>
                                            </div>
                                          </MenuItems>
                                        </Transition>
                                      </Menu>

                                    </>
                                  ) : (<></>)}
                                </div>
                              </li>
                            ))
                              : <div className={``}>
                              </div>}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center px-4 py-4">

                      <button
                        type="submit"
                        className="ml-4 inline-flex justify-center rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Clear Notifications
                      </button>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
