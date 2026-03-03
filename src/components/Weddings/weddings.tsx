import React, { useState } from 'react';
import { Heart } from 'lucide-react';

import { WeddingsIntro, Heading, Pricing, Portfolio } from '../../components';

const TABS = ['Our Approach', 'Pricing', 'Portfolio'] as const;
type Tab = (typeof TABS)[number];

export function Weddings() {
    const [activeTab, setActiveTab] = useState<Tab>('Our Approach');

    return (
        <section id="weddings" className="section bg-pinewood">
            <div className="mx-auto max-w-5xl px-4">
                <div className="section-heading">
                    <Heart size={60} className="mx-auto mb-2" />
                    <Heading heading="Weddings" />
                </div>
                <div>
                    <ul className="flex list-none p-0 mb-8 text-sm font-semibold">
                        {TABS.map(tab => (
                            <li key={tab} className="flex-1 text-center">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab(tab)}
                                    className={`w-full py-2 px-4 border-b-2 cursor-pointer bg-transparent ${
                                        activeTab === tab
                                            ? 'border-main-text text-main-text'
                                            : 'border-transparent text-main-grey hover:text-main-text'
                                    }`}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div>
                        {activeTab === 'Our Approach' && <WeddingsIntro />}
                        {activeTab === 'Pricing' && <Pricing />}
                        {activeTab === 'Portfolio' && <Portfolio />}
                    </div>
                </div>
            </div>
        </section>
    );
}
