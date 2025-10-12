import Image from "next/image";

interface IconProps {
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Icon({
  name,
  width = 24,
  height = 24,
  className,
}: IconProps) {
  return (
    <Image
      src={`/icon/ic-${name}.svg`}
      width={width}
      height={height}
      alt={`${name} icon`}
      className={className}
    />
  );
}
