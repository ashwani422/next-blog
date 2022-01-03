import { useSession, signIn } from "next-auth/react"

export default function Login() {

  const { data: session } = useSession()

  return (
    <div className="h-full flex justify-center items-center">
      <button className="px-3 rounded py-1 bg-slate-200 hover:bg-slate-900 hover:text-white" onClick={() => signIn('github')}>Login with Github</button> 
    </div>
  )
}
 