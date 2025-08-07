export const metadata = {
  title: 'Practo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#3e4eb8]">
      <body className="flex flex-col min-h-screen m-0 p-0 bg-[#3e4eb8]">
        {children}
      </body>
    </html>
  );
}
