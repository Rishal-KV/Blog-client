import * as Yup from 'yup';

const ProfileValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),
  bio: Yup.string()
    .required('Bio is required')
    .min(10, 'Bio must be at least 10 characters')
    .max(300, 'Bio must be at most 300 characters')
});

export default ProfileValidationSchema;
