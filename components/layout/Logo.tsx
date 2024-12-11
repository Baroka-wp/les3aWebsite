import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 48,
  md: 96,
  lg: 128,
};

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/logo3a.png"
        alt="3A/ASLA Logo"
        width={sizes[size]}
        height={sizes[size]}
        className="object-contain"
        priority
      />
    </div>
  );
}