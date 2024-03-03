import Image from "next/image";
import Link from "next/link";

export default function RedesSociais() {
    return (
      <div className="h-72 flex flex-col w-full items-center p-4 justify-center shadow-md  max-md:text-sm">
              <h2 className="text-3xl font-bold mb-10 max-sm:text-lg ">Acompanhe nossas redes sociais</h2>
          <div className="flex justify-evenly items-center space-x-10 ">
          <Link href="https://wa.me/5599991760735" target="_blank">
          <div className="flex p-4 justify-evenly items-center text-white font-bold h-20 rounded-3xl border bg-[#07332d] cursor-pointer transition-transform transform hover:scale-105 shadow-lg">
              
              <Image
              src="/whats.png"
              width={100}
              height={0}
              alt="WhatsApp"
              className=" h-16"/>
             
              <p>WhatsApp</p>
          </div>
          </Link>
          <Link href="https://www.instagram.com/lansenutri?igsh=MXNmMG9nMnhuOHBkdw==" target="_blank">
          <div className="flex p-4 justify-evenly items-center text-white font-bold h-20  rounded-3xl border bg-[#07332d] cursor-pointer transition-transform transform hover:scale-105 shadow-lg">
              
              <Image
              src="/instagram.png"
              width={100}
              height={0}
              alt=""
              className=" h-16"/>
              
              <p>Instagram</p>
              </div>
              </Link>
              </div>
              </div>
    );
  }
  
  