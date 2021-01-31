export type TInitialState = {
    name?: string;
    email?: string;
    telephone?: string;
    subject?: string;
    message?: string;
    status: string | number | undefined;
};

export type TAction = {
    type: string;
    field?: string;
    value?: string | number;
};
