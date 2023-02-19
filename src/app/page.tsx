import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  /* const response = await fetch("http://api.github.com/users/salvatoreDeploy", {
    next: {
      revalidate: 30,
    },
  }); */

  const response = await fetch("http://api.github.com/users/salvatoreDeploy");

  const user = await response.json();

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <h1>Hello Word Next</h1>
    </div>
  );
}
/* Sever-Side-Static */

// Por padrão agora o Next lida com as requisiçaõ promises em Sever-Side-First,
// Por padrão tambem ao biuldar o projeto as rotas serão carregadas de forma estatica
// Agora utilizando o "revalidate" ele lida em nivel de cada requisição

/* Sever-Side-Generation */

// Usaremos o cache: "no-store";
