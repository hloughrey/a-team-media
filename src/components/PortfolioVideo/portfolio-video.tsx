import React from 'react';

import { TPortfolioVideo } from './portfolio-video.types';

export function PortfolioVideo({ video, location }: TPortfolioVideo) {
    return (
        <div className="w-full md:w-1/2 px-2">
            <div className="my-4">
                <div className="w-full">
                    <div className="relative pt-[56.25%]">
                        {video && (
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                width="640"
                                height="360"
                                src={`${video}?autoplay=0`}
                                frameBorder="0"
                                allowFullScreen
                            />
                        )}
                    </div>
                </div>
                {location && (
                    <div className="w-full">
                        <div className="shadow-sm bg-white px-0">
                            <p className="text-center mt-0 p-4">{location}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
