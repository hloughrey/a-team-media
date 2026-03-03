import React from 'react';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';

import { TFooter } from './footer.types';

export function Footer({ text, socialMedia }: TFooter) {
    return (
        <footer className="relative text-dark-red">
            <div className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 px-2 flex justify-start sm:justify-start justify-center">
                    <ul className="pl-0 list-none leading-6 text-sm sm:text-[13px] md:text-sm">
                        <li className="m-4 sm:m-3 flex items-start">
                            <MapPin size={25} className="shrink-0 mt-0.5" />
                            <div className="inline-block align-middle pl-5">
                                <span className="font-bold">{text.AVE}</span>
                                <br />
                                {text.Address}
                            </div>
                        </li>
                        <li className="m-4 sm:m-3 flex items-start">
                            <Phone size={25} className="shrink-0 mt-0.5" />
                            <div className="inline-block align-middle pl-5">
                                {text.PhoneNumber}
                            </div>
                        </li>
                        <li className="m-4 sm:m-3 flex items-start">
                            <Mail size={25} className="shrink-0 mt-0.5" />
                            <div className="inline-block align-middle pl-5">
                                {text.Email}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/2 px-2 flex justify-end">
                    <ul className="flex list-none w-full pl-0 justify-center flex-wrap sm:flex-nowrap">
                        {socialMedia.map((social, index) => (
                            <li
                                key={index}
                                className={`m-1 ${index === 0 ? 'flex-none' : 'flex-1'}`}
                            >
                                <a
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-dark-red hover:shadow-md"
                                >
                                    {social.icon === 'facebook' ? (
                                        <Facebook size={36} />
                                    ) : (
                                        <img
                                            className="max-w-full"
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
                <p className="flex justify-center text-sm text-dark-red mb-0">
                    {text.Copyright}
                </p>
            </div>
        </footer>
    );
}
