type InputFieldProps = {
    label: string;
    id: string;
    type: string;
    register: any;
    error?: string;
  };
  
  const InputField: React.FC<InputFieldProps> = ({ label, id, type, register, error }) => (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-medium">{label}</label>
      <input
        id={id}
        type={type}
        {...register(id)}
        className="border p-2 rounded-md"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
  
  export default InputField;
  