import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
} from "../Card";


export default function CardServico() {
  return (
    <>
      <div className="bg-slate-100 h-96 flex flex-col items-center justify-center">
        <div className="flex p-4 space-x-40 ">
        <Link href="/eventos">
          <Card>
            <CardHeader>
              <CardTitle>Eventos</CardTitle>
            </CardHeader> 
          </Card>
          </Link>
          <Card >
            <CardHeader>
              <CardTitle>Edital</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Diretoria</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
}
