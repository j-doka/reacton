import { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import Auth from '../../components/Auth'
import Account from '../../components/Account'
import Layout from '../../components/layout.jsx'

export default function Home() {
    const [session, setSession] = useState(null)

    useEffect(() => {
        setSession(supabase.auth.session())

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    return (
        <Layout PageTitle='Reacton'>
            <div className="flex flex-col items-center justify-center  text-center">
                {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
            </div>
        </Layout>
    )
}