import React from 'react';

import { TFooter } from './footer.types';

export function Footer({ text, socialMedia }: TFooter) {
    return (
        <footer className="container">
            <div className="row">
                <div className="col-xs-6 contactDetails">
                    <ul>
                        <li>
                            <i
                                className="fa fa-map-marker fa-2x icon"
                                aria-hidden="true"
                            ></i>
                            <div className="details">
                                <span className="company">{text.AVE}</span>
                                <br />
                                {text.Address}
                            </div>
                        </li>
                        <li>
                            <i
                                className="fa fa-phone fa-2x icon"
                                aria-hidden="true"
                            ></i>
                            <div className="details">{text.PhoneNumber}</div>
                        </li>
                        <li>
                            <i
                                className="fa fa-envelope fa-2x icon"
                                aria-hidden="true"
                            ></i>
                            <div className="details">{text.Email}</div>
                        </li>
                    </ul>
                </div>
                <div className="col-xs-6 footerSocialMedia">
                    <ul className="socialMediaList">
                        {socialMedia.map((social, index) => (
                            <li key={index}>
                                <a
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {social.icon ? (
                                        <i
                                            className={`fab ${social.icon} fa-3x`}
                                            aria-hidden="true"
                                        ></i>
                                    ) : (
                                        <img
                                            className="image"
                                            src={social.image}
                                        />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <p className="copyright">{text.Copyright}</p>
            </div>
        </footer>
    );
}
