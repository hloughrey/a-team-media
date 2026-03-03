import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface CollapsibleProperties {
    isOpen?: boolean;
    heading: string;
    children: React.ReactNode;
}

export const Collapsible: React.FC<CollapsibleProperties> = ({
    isOpen = false,
    heading,
    children,
}) => {
    const [open, setOpen] = useState(isOpen);

    return (
        <div className="flex flex-col">
            <div
                onClick={() => setOpen(previous => !previous)}
                className="flex-1 bg-off-white py-3 px-3 text-2xl border-b-2 border-white cursor-pointer flex justify-between items-center"
            >
                <span>{heading}</span>
                {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            <div className={open ? 'block p-3' : 'hidden'}>{children}</div>
        </div>
    );
};
