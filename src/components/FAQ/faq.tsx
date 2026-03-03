import React from 'react';
import { HelpCircle } from 'lucide-react';

import { Heading, Collapsible } from '../../components';
import { TFaq } from './faq.types';

export function FAQ({ text }: TFaq) {
    return (
        <section id="faq" className="section bg-pinewood">
            <div className="mx-auto max-w-5xl px-4">
                <div className="section-heading">
                    <HelpCircle size={60} className="mx-auto mb-2" />
                    <Heading heading="FAQ" />
                </div>

                {text &&
                    text.map((faq, index) => (
                        <Collapsible
                            key={`Collapsible-${index}`}
                            heading={faq}
                            isOpen={index === 0}
                        >
                            <div>{faq}</div>
                        </Collapsible>
                    ))}
            </div>
        </section>
    );
}
