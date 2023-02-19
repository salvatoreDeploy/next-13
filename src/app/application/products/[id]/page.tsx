interface ProductProps {
  params: {
    id: string;
  };
}

export default function Product({ params }: ProductProps) {
  return <h1>Produto: {params.id}</h1>;
}
