
import * as Yup from 'yup';
const PostSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, 'Title is too short!')
      .max(50, 'Title is too long!')
      .required('Title is required'),
    description: Yup.string()
      .min(20, 'Description is too short!')
      .max(500, 'Description is too long!')
      .required('Description is required'),
    image: Yup.mixed().required('Image is required'),
  });

  export default PostSchema