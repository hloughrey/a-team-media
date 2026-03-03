import React from 'react';
import { Mail } from 'lucide-react';

import { Heading } from '../../components';

export function ContactUs() {
    return (
        <section id="contact" className="section bg-pinewood">
            <div className="mx-auto max-w-5xl px-4">
                <div className="section-heading">
                    <Mail size={60} className="mx-auto mb-2" />
                    <Heading heading="Get In Touch With Us" />
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 px-2">
                        <p>
                            If you have any queries please get in touch{' '}
                            <a href="tel:07789 620335">07789 620335</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
