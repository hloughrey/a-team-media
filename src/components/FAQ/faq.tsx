import React from 'react';
// import ReactHtmlParser from 'react-html-parser';

import { Heading, Collapsible } from '../../components';
import { TFaq } from './faq.types';
import styles from './styles.module.scss';

function FAQ({ text }: TFaq) {
    <section id="faq" className={styles.section}>
        <div className="container">
            <div className={styles.heading}>
                <i className="fa fa-question fa-5x" aria-hidden="true"></i>
                <Heading heading="FAQ" />
            </div>

            {text &&
                text.map((faq, index) => (
                    <Collapsible
                        key={`Collapsible-${index}`}
                        heading={faq.question}
                        isOpen={index === 0 ? true : false}
                    >
                        {/* {ReactHtmlParser(faq.answer)} */}
                    </Collapsible>
                ))}
        </div>
    </section>;
}
