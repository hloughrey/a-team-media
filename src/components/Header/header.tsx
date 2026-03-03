import React, { useState } from 'react';

import { THeader } from './header.types';

export function Header({ menu }: THeader) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            {/* Mobile / tablet nav (hidden on lg+) */}
            <nav className="lg:hidden fixed top-0 left-0 w-full z-50 bg-white flex items-center justify-center">
                <div
                    className="w-full text-center cursor-pointer"
                    onClick={() => setMenuOpen(previous => !previous)}
                >
                    <span className="block py-4 text-main-text text-lg font-semibold">
                        Menu
                    </span>
                    {menuOpen && (
                        <ul className="list-none pl-0 pb-2">
                            {menu.map((item, index) => (
                                <li key={index} className="py-3">
                                    <a
                                        className="text-main-text text-lg font-semibold no-underline"
                                        href={item.hash ? `#${item.hash}` : '/'}
                                    >
                                        {item.route}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>

            {/* Desktop nav (lg+) */}
            <nav className="hidden lg:flex fixed top-0 left-0 w-full z-50 bg-white items-center justify-center">
                <ul className="flex w-full list-none pl-0 my-0">
                    {menu.map((item, index) => (
                        <li key={index} className="flex-1 text-center">
                            <a
                                className="block py-3 text-main-text text-sm font-semibold no-underline hover:bg-transparent focus:bg-transparent"
                                href={item.hash ? `#${item.hash}` : '/'}
                            >
                                {item.route}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
