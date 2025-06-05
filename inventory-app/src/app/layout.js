import "./globals.css";
import Layout from "./components/layout";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  weight: "500",
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
