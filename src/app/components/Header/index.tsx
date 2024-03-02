import Image from "next/image";

export default function Header (){
    return (
        <div className=" flex items-center justify-center h-40 w-full bg-[#07332d]">
            <Image alt="" width={150} height={75} src="/logo.jpeg"/>
            <p></p>
        </div>
    )
}