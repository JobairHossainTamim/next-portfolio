import { Inter } from "next/font/google";
import "./globals.css";
import Themes from "@/components/Themes/Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammed Jobair Hossain",
  description:
    "My name is mohammed jobair hossain . I am a full stack MERN Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Themes>{children}</Themes>
      </body>
    </html>
  );
}
