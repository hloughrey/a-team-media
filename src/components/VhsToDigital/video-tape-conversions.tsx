import React from 'react';
import { Video } from 'lucide-react';

import { Heading } from '../../components';

export function VhsToDigital() {
    return (
        <section id="video-tape-conversions" className="section bg-pinewood">
            <div className="mx-auto max-w-5xl px-4">
                <div className="section-heading">
                    <Video size={60} className="mx-auto mb-2" />
                    <Heading heading="Video to Digital" />
                </div>
                <div>
                    <div className="my-4">
                        <p>
                            Looking to retain all your family history & memories
                            from your old VHS and camcorder tapes?
                        </p>
                        <p>
                            Here at A-Team Media, we can rescue your treasured
                            memories from video tape and restore them on to more
                            modern storage so you can reminisce and be sure your
                            memories are safe for your families next generation.
                        </p>
                        <p>
                            All our conversions have a basic edit to rid your
                            memories of old and unwanted recorded TV content or
                            where the lens cap has been left on or event camera
                            left on in a bag. This is done as standard and will
                            cost you no extra. You will not get that at any
                            other company, I can guarantee that.
                        </p>
                        <p>
                            Prices quoted are for the basic service but often
                            all this is needed.
                        </p>
                        <p>
                            Other options for more premium discs and cases are
                            available on request.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full sm:w-1/2 text-center my-4">
                            <h2 className="mt-0 mb-0 py-4 border border-light-red bg-[#ef9a9a]">
                                MP4 Files
                            </h2>
                            <ul className="list-none p-0 m-0">
                                <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                                    Tape converted to MP4 - £15
                                </li>
                                <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                                    Supplied on a USB - £10**
                                </li>
                                <li className="text-base py-3 px-3 border border-light-pink odd:bg-off-white even:bg-medium-pink">
                                    Digital link supplied for download - £10
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ul className="list-none pl-0">
                            <li>
                                *These prices is on top of the conversion price,
                                so 10 files on one USB would be £160 total.
                            </li>
                            <li>
                                **Larger USB media may be required and will be a
                                slight increase in cost.
                            </li>
                        </ul>
                        <p>
                            USB storage is by far the best storage for your
                            files as it can be copied and saved on other formats
                            easily. DVD is now dead technology and is no longer
                            supplied.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
