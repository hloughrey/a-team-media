import React, { PropsWithChildren } from 'react';

import { Header, Footer } from '..';

import { text } from '../../lib/text';

export function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <div>
            <Header menu={text.Menu} />
            <div className="mainContainer">
                <div className="container-fluid">
                    <div className="row mainRow">
                        <div className="mainWrapper">
                            <main>{children}</main>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerWrapper">
                <Footer text={text.General} socialMedia={text.SocialMedia} />
            </div>
        </div>
    );
}
