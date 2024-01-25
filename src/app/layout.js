import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SightingsPage from "./components/sightings";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "U.W.O. DOGSPOTTING",
  description: "Spot a dog!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
