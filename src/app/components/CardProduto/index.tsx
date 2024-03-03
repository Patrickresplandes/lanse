import Image from "next/image";

export default function CardProduto() {
  return (
    <div className=" flex items-center p-4 justify-center shadow-md">
      <div className="flex flex-col lg:flex-row w-full max-w-full lg:justify-between h-full">
        <div className="w-full lg:w-1/3 flex justify-center">
          <Image src="/nutricao1.png" alt="" layout="responsive" width={300} height={60} />
        </div>
        <div className="w-full lg:w-2/3 pr-4 flex flex-col items-center lg:items-start justify-center">
          <p className="text-lg text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magnam debitis ipsam, maxime architecto natus? Molestias illum explicabo beatae, vel odio sit expedita nesciunt animi neque illo quia maxime amet!
          </p>
        </div>
      </div>
    </div>
  );
}