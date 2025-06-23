"use client";
import { Card } from "./_componentshomepage/card";

export default function Homepage() {
  return (
    <main>
      <div className="items-center bg-purple-200 flex max-w-lm p-6">
        <div className="my-auto flex text-2xl flow-root ">
          <h1 >Sua Música, </h1>
          <h1 className="text-purple-300">
            Nossa paixão
          </h1>
        </div>
        <div>
          <p>
            Descubra os melhores instrumentos musicas, equippamentos de áudio e acessórios.
             Transforme sua paixa pela música em realidade.
          </p>
        </div>
        <div>
          <h1> Bem vindos</h1>
        </div>
      </div>
      <div className="w-100vh h-100vh bg-blue-400 mx-auto flex max-w-sm">
        <h1> Bem vindos</h1>
        
        <Card/>
      </div>
      <div className="w-100vh h-100vh bg-black mx-auto flex max-w-sm">
        <h1> Bem vindos</h1>
        <Card/>
        <Card/>
      </div>
    </main>
  );
}