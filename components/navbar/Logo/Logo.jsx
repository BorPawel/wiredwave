import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/logo.png";
const Logo = () => (
  <div className="flex-center">
    <Link href="/">
      <Image src={logo} width={100} className="w-12 lg:w-24" />
    </Link>
  </div>
);
export default Logo;
