import Image from "next/image";

export default function SubCardProduto() {
  return (
    <div className="h-72 flex items-center p-4 justify-center shadow-md bg-green-300">
      <div className="flex justify-between h-full w-full ">
        <div className="w-1/2 pr-4 flex  items-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            magnam debitis ipsam, maxime architecto natus? Molestias illum
            explicabo beatae, vel odio sit expedita nesciunt animi neque illo
            quia maxime amet!
          </p>
        </div>
        <div className="w-1/3 flex justify-center">
          <Image src="/nutricao1.png" alt="" width={450} height={100} />
        </div>
      </div>
    </div>
  );
}
