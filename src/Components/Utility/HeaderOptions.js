import React from 'react'
import {
    ArchiveBoxIcon,
    ArrowRightCircleIcon,
    ChevronDownIcon,
    DocumentDuplicateIcon,
    HeartIcon,
    PencilSquareIcon,
    TrashIcon,
    UserPlusIcon,
} from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const HeaderOptions = (props) => {

    // const {sections} = props;
    return (
        <div className='ss:hidden mx-2'>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-[6px] text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Categories
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                    <MenuItems className="absolute  z-10 mt-2 w-56  divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {props.sections.map((section, index) => (

                            <MenuItem>
                                {({ focus }) => (
                                    <div
                                        className={classNames(
                                            focus ? 'bg-gray-100 text-gray-900 cursor-pointer' : 'text-gray-700',
                                            'group flex items-center px-4 py-2 text-sm'
                                        )}
                                    >
                                        <PencilSquareIcon
                                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                        {section.title}
                                    </div>
                                )}
                            </MenuItem>
                        )
                        )}
                    </MenuItems>
                </Transition>
            </Menu>
        </div>
    )
}

export default HeaderOptions