import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '../schemas/formValidation';
import { FormData } from '../types/formTypes';
import InputField from '../components/Form/InputField';
import SubmitButton from '../components/Form/SubmitButton';

const FormPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputField
        label="Nome"
        id="nome"
        type="text"
        register={register}
        error={errors.nome?.message}
      />
      <InputField
        label="Email"
        id="email"
        type="email"
        register={register}
        error={errors.email?.message}
      />
      <InputField
        label="Idade"
        id="idade"
        type="number"
        register={register}
        error={errors.idade?.message}
      />
      <SubmitButton />
    </form>
  );
};

export default FormPage;
