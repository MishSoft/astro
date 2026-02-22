import "./globals.css";
import { Google_Sans_Code } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import Header from "./components/Header/Header";


const googleSans = Google_Sans_Code({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <body className={` ${googleSans.variable} antialiased`}>
        <ThemeRegistry>
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
