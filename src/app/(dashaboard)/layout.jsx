import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { logo } from "@/images/images";
import Image from "next/image";
import Link from "next/link";

export default function DashaboardLayout({ children }) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] ">
        <Link
          className="flex justify-center lg:justify-start items-center gap-5 p-4 "
          href={"/"}
        >
          <Image src={logo} alt="logo" width={32} height={32} />
          <span className="hidden lg:block">SchooLama</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
       <Navbar />
       {children}
      </div>
    </div>
  );
}
