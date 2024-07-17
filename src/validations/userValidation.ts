import * as Yup from 'yup';

export const loginValidation = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .max(30, 'Username must not exceed 30 characters')
        .required('Username is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match') 
        .required('Confirm Password is required'),
});

export default SignupSchema;
