import { useSession, signIn } from "next-auth/react"

export default function Dashboard() {

  const { data: session } = useSession()

  if(!session) return <h1>You are logged-out!</h1>

  return (
    <>
      <h1>Welcome! <b>{ session?.user?.name }</b>.<br />
      Feel free to use your dashboard.</h1>
    </>
  )
}
 