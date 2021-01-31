export type TFooter = {
    text: {
        AVE: string;
        Address: string;
        PhoneNumber: string;
        Email: string;
        Copyright: string;
    };
    socialMedia: TSocialMedia[];
};

export type TSocialMedia = {
    link: string;
    icon: string;
    image?: string;
};
