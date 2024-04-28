interface ButtonProps {
  buttonText: string;
  onClick?: () => void;
}

export default function Button({ buttonText, onClick }: ButtonProps) {
  return (
    <button className="bg-blue-300 rounded-md py-2 px-3 hover:bg-blue-400"
    onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
