import { useSession } from "next-auth/react"
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {

  const { data: session } = useSession()

  if(session) {
    return (
      <>
        <h1>Welcome! <b>{ session?.user?.name }</b></h1>
      </>
    )
  }

  return (
    <>
      <h1>Index page</h1>
    </>
  )
}
