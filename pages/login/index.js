import { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import Auth from '../../components/Auth'
import Account from '../../components/Account'
import Layout from '../../components/layout.jsx'

export default function Home({times}) {
    const [session, setSession] = useState(null)
    console.log(times)
    // iterate through data and assign each data to the repective user. 
    useEffect(() => {
        setSession(supabase.auth.session())

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    return (
        <Layout PageTitle='Reacton'>
            <div className="container" style={{ padding: '50px 0 100px 0' }}>
                { !session 
                    ? <Auth /> 
                    : <Account key={session.user.id} session={session}>
                        <div>
                            {/* graph */}
                        </div>
                    </Account>
                
                }
            </div>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const { data: times } = await supabase
        .from('profiles')
        .select(`timerDelt, username`)

    return {
        props: {
            times,
        }
    }
}