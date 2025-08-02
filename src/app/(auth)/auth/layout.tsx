import { Poppins } from "next/font/google";
import "../../globals.css";
import { Toaster } from "@/components/ui/sonner";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"], 
  display: "swap",
  variable: "--font-poppins",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
