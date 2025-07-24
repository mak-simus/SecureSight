// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "SecureSight",
  description: "Incident monitoring dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0e1627] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
