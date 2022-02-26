import Image from 'next/image'
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import {
    container,
    logBotton,
    disimage,
    discordInfo,
    callout
} from "./Account.module.css"

export default function Account({ session}) {
    const [loading, setLoading] = useState(true)
    const [setUsername] = useState(null)
    const [setTimes] = useState(null)

    async function getProfile() {
        try {
            setLoading(true)
            const user = supabase.auth.user()
            

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`username`)
                .select(`timerDelt`)
                .eq('id', user.id)
                .single()

            if (error && status !== 406) {
                throw error
            }
            
            if (data) {
                setUsername(username)
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    let username = session.user.user_metadata.full_name

    useEffect(() => {
        getProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session])

    

    return (
        <div className={container}>
            <p className={callout}>
                Discord Account Linked!
            </p>
            <div className={discordInfo}>
                <Image
                    className={disimage}
                    src={session.user.user_metadata.avatar_url}
                    alt="Discord Avatar"
                    height={80}
                    width={80}
                />
            </div>
            <p>{username}</p>
            <div>
                <button className={logBotton} onClick={() => supabase.auth.signOut()}>
                    Sign Out
                </button>
            </div>
        </div>
    )
}




// how about we update profiles table with discord users.