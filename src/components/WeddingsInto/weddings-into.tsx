import React from 'react';

import { credentials } from '../../lib/credentials';

export function WeddingsIntro() {
    return (
        <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-8 md:mb-0">
                <p>
                    We strive to provide a friendly service before, during and
                    after your wedding day to put you at ease throughout the
                    whole process.
                </p>
                <p>
                    On the day of your wedding we aim to remain as discreet as
                    possible to ensure that you and your guests can enjoy your
                    day without cameras getting in the way. We have all been to
                    weddings as a guest where videographers are making the day
                    look like a Hollywood blockbuster - this is not our style.
                </p>
                <p>
                    My assistant and myself will engage with you and your guests
                    though. We find engaging with guests in particular puts them
                    at ease and affords us the opportunity to explain what we
                    are doing hiding behind a tree or hanging out an upstairs
                    window - yes this happens.
                </p>
                <p>
                    We will never ask you or your partner to stage shots either
                    - again it&apos;s not our style. We like to provide you with
                    a film of your day as it unfolds. This will allow you to
                    relive your day again and again and also see the parts the
                    you never got to see on the day. We won&apos;t follow the
                    photographer around as it&apos;s their job to get these
                    personal photos with you. We will capture some elements of
                    that for the purposes of documenting your day.
                </p>
                <p>
                    We use professional level equipment, cameras, lenses and
                    microphones to capture your day in the best possible way
                    whilst being as unobtrusive as possible.
                </p>
                <p>
                    Once we have all your footage and audio we need to piece it
                    all together for you in a highlights film and separate
                    elements of your day and deliver to you in a such a
                    beautiful package that you will feel like it&apos;s your day
                    again every time you see it.
                </p>
            </div>
            <div className="w-full md:w-1/2 px-2">
                <img
                    className="w-full shadow-[2px_4px_5px_#888888] rounded"
                    src={`${credentials.cloudinary}/v1533585719/a-team-media/wedding_v2.jpg`}
                />
            </div>
        </div>
    );
}
