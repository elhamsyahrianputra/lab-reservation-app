import type { HasColorProp } from "@/types/color.types";

interface ButtonProps extends HasColorProp {
  children: React.ReactNode;
}

const TEXT = {
  LIGHT: "text-white",
  DARK: "text-grey-800",
};

const buttonStyleMap: Record<
  NonNullable<ButtonProps["color"]>,
  { background: string; text: string }
> = {
  primary: { background: "bg-primary", text: TEXT.LIGHT },
  secondary: { background: "bg-secondary", text: TEXT.LIGHT },
  info: { background: "bg-info", text: TEXT.DARK },
  success: { background: "bg-success", text: TEXT.DARK },
  warning: { background: "bg-warning", text: TEXT.DARK },
  error: { background: "bg-error", text: TEXT.DARK },
  light: { background: "bg-white", text: TEXT.DARK },
  dark: { background: "bg-grey-800", text: TEXT.LIGHT },
};

export default function Button({ color = "primary", children }: ButtonProps) {
  const colorClass = buttonStyleMap[color];

  return (
    <button
      type="submit"
      className={`${colorClass.background} ${colorClass.text} flex min-h-12 items-center justify-center rounded-lg px-4 py-2 font-bold text-[15px] duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-85`}
    >
      {children}
    </button>
  );
}
