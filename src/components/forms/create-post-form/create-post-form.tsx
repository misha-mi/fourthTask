import { Text, View } from 'react-native';
import Upload from '../../../ui/upload/upload';
import Input from '../../../ui/input/input';
import CustomButton from '../../../ui/custom-button/custom-button';
import { Controller, useForm } from 'react-hook-form';
import { THandlerGenerateStatus } from '../join-us-form/type';
import { useState } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useMutation } from '@apollo/client';
import { POST_CREATE } from '../../../apollo/service/post-create';
import { getLinkForPhoto } from '../../../service/get-link-for-photo';
import { putPhoto } from '../../../service/put-photo';

type TInputs = {
  description: string;
  media: { path: string; data: string };
  title: string;
};

const CreatePostForm = () => {
  const navigation = useNavigation();
  const { errorColor } = useTheme().colors.defaultColors;

  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [createPost] = useMutation(POST_CREATE, {
    onCompleted: () => navigation.goBack(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TInputs>();

  const onSubmit = async (dataForm: TInputs) => {
    setIsLoading(true);
    const { path } = dataForm.media;
    const fileName = path.slice(path.lastIndexOf('/') + 1);

    const uriPut = await getLinkForPhoto(fileName, 'POSTS');

    const res = await fetch(path);
    const blobData = await res.blob();

    const uriPush = await putPhoto(uriPut, blobData);

    createPost({
      variables: {
        ...dataForm,
        mediaUrl: uriPush,
      },
    }).finally(() => setIsLoading(false));
  };

  const handlerClickButtonSubmit = () => {
    if (isAfterFirstSubmit) setIsAfterFirstSubmit(false);
    handleSubmit(onSubmit)();
  };

  const handlerGenerateStatus: THandlerGenerateStatus = errorMessage => {
    if (isAfterFirstSubmit) {
      return 'waiting';
    } else if (errorMessage) {
      return 'error';
    } else {
      return 'success';
    }
  };

  const handlerGenerateButtonStatus = (isAfter, isValid, isLoadingRequest) => {
    if (!isValid && !isAfter) {
      return 'disabled';
    } else if (isLoadingRequest) {
      return 'loading';
    } else {
      return 'waiting';
    }
  };

  return (
    <View>
      <View style={{ marginBottom: 25 }}>
        <Controller
          control={control}
          rules={{ required: 'Img is required' }}
          name="media"
          render={({ field: { onChange, value } }) => (
            <Upload img={value} setImg={onChange} />
          )}
        />
        <Text style={{ color: errorColor, marginTop: 6 }}>
          {errors.media?.message}
        </Text>
      </View>

      <Controller
        control={control}
        rules={{
          required: 'Title is required',
          minLength: {
            value: 5,
            message: 'Title must be longer than or equal to 5 characters',
          },
        }}
        name="title"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Title"
            placeholder="Enter title of post"
            status={handlerGenerateStatus(errors.title?.message)}
            onChange={onChange}
            value={value}
            errorMessage={errors.title?.message}
          />
        )}
      />

      <Controller
        control={control}
        rules={{
          required: 'Description is required',
          minLength: {
            value: 40,
            message:
              'Description must be longer than or equal to 40 characters',
          },
        }}
        name="description"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Description"
            placeholder="Enter your post"
            status={handlerGenerateStatus(errors.description?.message)}
            onChange={onChange}
            value={value}
            errorMessage={errors.description?.message}
          />
        )}
      />

      <View style={{ marginTop: 40 }}>
        <CustomButton
          title="Publish"
          status={handlerGenerateButtonStatus(
            isAfterFirstSubmit,
            isValid,
            isLoading,
          )}
          onClick={handlerClickButtonSubmit}
        />
      </View>
    </View>
  );
};

export default CreatePostForm;
