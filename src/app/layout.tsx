// Antigo _document ou APP

//Aqui é Layout ROOT

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <h1>Teste Header</h1>
        {children}
      </body>
    </html>
  );
}
