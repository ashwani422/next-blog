import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sm:container mx-auto p-4 bg-gray-300">
        Index page
      </div>
    </>
  )
}
