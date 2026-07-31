import "@/app/ui/global.css";
import { inter } from "./ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The acme dashboard.',
  metadataBase: new URL('url-to-metadata'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
