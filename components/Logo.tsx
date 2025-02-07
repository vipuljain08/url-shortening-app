import Image from "next/image";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" aria-label="Shortly logo" className={className}>
      <Image
        src="/logo.svg"
        alt="Shortly"
        width={121}
        height={33}
        className="mx-auto"
      />
    </Link>
  );
};
export default Logo;
