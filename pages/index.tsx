import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"
import useCurrentUser from './../hooks/useCurrentUser';
import Navbar from "./components/navbar";

export async function getServerSideProps(context: NextPageContext) {

  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }

}

export default function Home() {


  const { data: user } = useCurrentUser();
  return (
    <>
      <Navbar />
    </>
  )
}
