export const required = value => value ? undefined : 'Required';
export const validEmail = value =>
    value && !/.+@.+\..{2,}/.test(value) ?
        'Invalid email address' : undefined;
