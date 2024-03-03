import Image from "next/image";

export default function SubCardProduto() {
  return (
    <div className="bg-green-300 shadow-md p-4 rounded-md flex flex-col items-center lg:flex-row justify-center">
      <div className="flex-1 w-full text-center lg:text-left pr-4">
        <p className="text-xl font-semibold mb-2">Atendimento Nutricional</p>
        <p className="text-lg">
          Venha conhecer nossa clínica de atendimento nutricional, de forma totalmente gratuita para comunidade. Nela você encontra atendimento nutricional realizado pelas acadêmicas de nutrição da liga, atendimento este, que é supervisionado por uma profissional nutricionista da Instituição. Lá você encontrará atendimento personalizado e humanizado. Para mais informações clique no ícone abaixo que lhe redirecionará para o nosso WhatsApp.
        </p>
      </div>
      <div className="flex justify-center w-full lg:w-1/3 mt-4 lg:mt-0">
        <Image src="/nutricao1.png" alt="" width={450} height={100} />
      </div>
    </div>
  );
}