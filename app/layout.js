import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskContextProvider from "../store/taskContextProvider";
import Layout from "../component/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To do list",
  description: "split your day to achieve goal",
};

export default function RootLayout({ children }) {
  return (
    <TaskContextProvider>
      <html lang="en">
        <body className={inter.className}>
          <Layout>{children}</Layout>
        </body>
      </html>
    </TaskContextProvider>
  );
}
