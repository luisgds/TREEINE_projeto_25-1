type PriceProps = {
  valor: number;
  moeda: string; // BRL, USD ...
};

export function Price({ valor, moeda }: PriceProps) {
  const preco_com_moeda = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: moeda,
  }).format(valor);

  return <span>{preco_com_moeda}</span>;
}