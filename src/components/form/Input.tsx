interface InputTextProps {
  label: string;
  type?: "text" | "password";
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value?: string) => void;
}

export default function InputText({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}: InputTextProps) {
  return (
    <div className="relative">
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="peer w-full rounded-lg px-3.5 py-4 text-grey-800 focus:border-0 focus:outline-0"
      />
      <label
        htmlFor={label}
        className="-translate-y-2 absolute top-0 z-10 block translate-x-2.5 px-1 font-semibold text-grey-600 text-xs ease-[0.4,0,0.2,1] peer-hover:text-grey-800 peer-focus:text-grey-800"
      >
        {label}
      </label>
      <div className="-z-1 absolute top-0 h-full w-full rounded-lg border border-grey-500/20 transition-al duration-150 ease-[0.4,0,0.2,1] peer-hover:border-grey-800 peer-focus:border-2 peer-focus:border-grey-800">
        <span className="-translate-y-3 absolute top-0 block translate-x-2.5 bg-white px-1 font-semibold text-transparent text-xs">
          {label}
        </span>
      </div>
    </div>
  );
}
