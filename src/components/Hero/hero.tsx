import React from 'react';

import { credentials } from '../../lib';

export function Hero() {
    return (
        <section
            id="hero"
            className="bg-pinewood w-full min-h-screen flex justify-center flex-col"
        >
            <div className="pb-8 md:pb-20 lg:pb-32 self-center">
                <img
                    className="max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] w-[90%] h-auto"
                    src={`${credentials.cloudinary}/c_scale,w_auto,dpr_auto,f_auto,q_auto/v1674423694/a-team-media/a-team-media-logo.png`}
                    alt="Main Logo"
                />
            </div>
            <div className="text-center uppercase self-center">
                <p className="text-dark-red tracking-[0.2em] text-base sm:text-xl lg:text-3xl pb-8">
                    Scroll for more
                </p>
                <svg
                    id="scrollplz-arrow"
                    height="50px"
                    viewBox="0 0 5 27"
                    stroke="none"
                    fill="currentColor"
                    className="text-dark-red mt-8 animate-bounce mx-auto block"
                >
                    <rect x="2" y="0" width="1" height="23" />
                    <path d="M0,22.244 L2.493,26.562 L4.986,22.244 L0,22.244 Z" />
                </svg>
            </div>
        </section>
    );
}
