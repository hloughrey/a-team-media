import React, { useState } from 'react';

import styles from './styles.module.scss';

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

    const handleCollapse = () => {
        setOpen(previous => !previous);
    };

    return (
        <div className={styles.collapsible}>
            <div onClick={handleCollapse} className={styles.heading}>
                <span>{heading}</span>
                <i
                    className={`fa fa-chevron-${open ? 'up' : 'down'} ${styles.chevron}`}
                    aria-hidden="true"
                ></i>
            </div>
            <div className={open ? styles.visible : styles.collapsed}>
                {children}
            </div>
        </div>
    );
};
