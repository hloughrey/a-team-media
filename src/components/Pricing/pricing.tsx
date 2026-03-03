import React from 'react';

export function Pricing() {
    return (
        <div>
            <p>
                We love to keep our pricing structure simple to understand with
                only one fantastic package available, with the addition of
                &apos;Bonus Features&apos;, making your package bespoke.
            </p>
            <p>
                Our <strong>Essential Film Package</strong> covers the most
                important parts of your day and we believe this is excellent
                value for money for the traditional style of filming and
                production we provide. This enables you to build the perfect
                package to suit you - after all it is your special day.
            </p>
            <p>
                Your ceremony, speeches and first dance will be covered with up
                to 3 cameras with fantastic audio capture giving you amazing
                coverage of the day, yet filmed in a discreet way.
            </p>
            <p>
                Your final footage will include a &apos;Highlights&apos; clip of
                your day along with your full Ceremony, Speeches and First Dance
                (Depending on package booked) and new from 2023 onwards, raw
                unedited footage from your day (between 30 and 60 mins). This
                really takes you back to those moments as it has the real
                laughter, ambience of the day without any music drowning it out.
            </p>
            <p>
                Digital media is changing fast, we know the majority of our
                couples stream their TV and movie viewing via internet suppliers
                such as Netflix, Amazon Prime, Apple TV and many more so we are
                having to adapt to these changes and will now offer full digital
                delivery service where you can stream your footage via our
                partners at Mediazilla. Along with a streaming version of your
                documentary styled film, you will receive a beautifully
                presented USB with your &quot;Highlights&quot; and extras in an
                offline playable version through your computer which can be HDMI
                linked to any TV.
            </p>
            <p>
                If your requirements are not met with the list below then please
                get in touch to discuss your own wishes for a totally bespoke
                package especially tailored for you.
            </p>

            <div className="flex flex-wrap -mx-2 my-4">
                <div className="w-full sm:w-5/12 px-2 mb-4 text-center">
                    <h2 className="mt-0 mb-0 py-4 border-2 border-light-red bg-[#ef9a9a]">
                        Half Day Package
                    </h2>
                    <ul className="list-none p-0 m-0">
                        <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                            £950
                        </li>
                        <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                            Guest arrival
                        </li>
                        <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                            Full ceremony
                        </li>
                        <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                            Drinks reception
                        </li>
                        <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                            Full speeches
                        </li>
                    </ul>
                </div>
                <div className="w-full sm:w-5/12 sm:ml-[16.666%] px-2 mb-4 text-center">
                    <h2 className="mt-0 mb-0 py-4 border-2 border-light-red bg-[#ef9a9a]">
                        Essential Film Package
                    </h2>
                    <ul className="list-none p-0 m-0">
                        <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                            £1500
                        </li>
                        <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                            Half day features, plus:
                        </li>
                        <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                            Establishing shots of your chosen venue(s)
                        </li>
                        <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                            Evening Guests Arrival
                        </li>
                        <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                            Cake Cutting
                        </li>
                        <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                            First Dance
                        </li>
                    </ul>
                </div>
            </div>

            <div className="my-4 text-center">
                <h2 className="mt-0 mb-0 py-4 border-2 border-light-red bg-[#ef9a9a]">
                    Bonus Features
                </h2>
                <ul className="list-none p-0 m-0">
                    <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                        Bride/Groom preparations{' '}
                        <span className="text-light-red font-semibold">*</span>{' '}
                        + £250 (Filmed in a relaxed way)
                    </li>
                    <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                        Video &apos;Guest Messages&apos; after First Dance{' '}
                        <span className="text-light-red font-semibold">**</span>{' '}
                        + £250 (Great fun for everyone who gets involved,
                        couples and guests love it)
                    </li>
                    <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                        Any entertainment during meal to be filmed - £100
                    </li>
                    <li className="text-base py-3 px-3 border border-light-pink text-light-red font-semibold odd:bg-off-white even:bg-medium-pink">
                        * Based on a single location, if two locations, it may
                        require an additional camera operator to be hired at an
                        additional cost.
                    </li>
                    <li className="text-base py-3 px-3 border border-light-pink text-light-red font-semibold odd:bg-off-white even:bg-medium-pink">
                        ** Filming until 10pm
                    </li>
                </ul>
            </div>

            <p>
                To book, we require £250 to secure your date which also forms as
                a service fee, covering work undertaken prior to your wedding
                day.
            </p>
            <p>
                This is non-returnable as it is for services rendered and is
                taken off your final invoice.
            </p>
            <p>
                If you would like to see a sample of a complete wedding film
                then please get in touch via the &apos;Contact Us&apos; page to
                receive a digital link to view.
            </p>
            <p>If you have any questions at all, do not hesitate to ask.</p>
        </div>
    );
}
