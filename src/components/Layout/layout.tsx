import React, { PropsWithChildren } from 'react';

import { Header, Footer } from '..';

import { text } from '../../lib/text';

export function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <div>
            <Header menu={text.Menu} />
            <main className="pt-[60px]">{children}</main>
            <div className="p-4 relative w-full">
                <Footer text={text.General} socialMedia={text.SocialMedia} />
            </div>
        </div>
    );
}
