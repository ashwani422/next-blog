import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/router"

export default function Login() {

  const { data: session, status } = useSession()
  const router = useRouter()

  if(status === 'authenticated') router.push('/dashboard')

  return (
    <div className="h-full flex flex-col justify-center items-center">
      {
        status === 'unauthenticated' && <>
          <button className="px-3 rounded py-1 bg-slate-300 hover:bg-slate-900 hover:text-white" onClick={() => signIn('github')}>Login with Github</button>
          <button className="mt-5 px-3 rounded py-1 bg-slate-300 hover:bg-slate-900 hover:text-white" onClick={() => signIn('google')}>Login with Google</button>
        </>
      }
      {
        status === 'loading' &&
          <button className="px-3 rounded py-1 bg-slate-300 hover:bg-slate-900 hover:text-white">Loading...</button> 
      }
    </div>
  )
}
 