import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="A blog website" />
      </Head>

      <Navbar />
      <main className="sm:container mx-auto p-4 h-screen">{ children }</main>
      <Footer />
    </>
  )
}
