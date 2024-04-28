interface TextInputProps {
  placeholderText: string 
  onChange?: (event: React.ChangeEvent<HTMLInputElement>)=>void
}

export default function TextInput({placeholderText, onChange}: TextInputProps) {
  return (
    <input
      onChange={onChange}
      className="w-full py-2 px-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      placeholder={placeholderText}
    />
  );
}
