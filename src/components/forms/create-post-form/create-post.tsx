import { View } from 'react-native';
import Upload from '../../../ui/upload/upload';
import Input from '../../../ui/input/input';
import CustomButton from '../../../ui/custom-button/custom-button';
import { Controller, useForm } from 'react-hook-form';

type TInputs = {
  description: string;
  mediaUrl: string;
  title: string;
};

const CreatePostForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>();

  return (
    <View>
      <View style={{ marginBottom: 25 }}>
        <Controller
          control={control}
          name="mediaUrl"
          render={({ field: { onChange, value } }) => <Upload isEmpty />}
        />
      </View>

      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Title"
            placeholder="Enter title of post"
            status="waiting"
            onChange={onChange}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Description"
            placeholder="Enter your post"
            status="waiting"
            onChange={onChange}
            value={value}
          />
        )}
      />

      <CustomButton title="Publish" status="disabled" />
    </View>
  );
};

export default CreatePostForm;
