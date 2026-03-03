import React from 'react';

export function NotFound() {
    return (
        <div className="h-full w-full">
            <div className="w-full flex justify-center items-center flex-col">
                <p className="text-[120px] mb-0">404</p>
                <p className="uppercase text-center">
                    Opps, Sorry we can&apos;t find that page
                </p>
                <p className="uppercase text-center">
                    Either something when wrong or the page{' '}
                    <br className="hidden md:block" />
                    doesn&apos;t exist any longer
                </p>
                <button
                    type="button"
                    className="w-full bg-dark-red border-dark-red text-white py-3 px-6 text-lg cursor-pointer"
                    onClick={() => (window.location.href = '/')}
                >
                    Go to Home Page
                </button>
            </div>
        </div>
    );
}
