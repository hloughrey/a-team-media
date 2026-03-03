import React, { Fragment } from 'react';

import { THeading } from './heading.types';

export function Heading({ heading }: THeading) {
    return (
        <Fragment>
            <h1 className="text-center uppercase">{heading}</h1>
            <span className="block w-[60px] mx-auto my-8 border-b-4 border-solid"></span>
        </Fragment>
    );
}
