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

      <div className="container mx-auto h-screen flex flex-col">
        <Navbar />
        <main className="grow p-4">{ children }</main>
        <Footer />
      </div>
    </>
  )
}
