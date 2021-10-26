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

export default function Account({ session }) {
    const [loading, setLoading] = useState(true)
    const [setUsername] = useState(null)

    

    async function getProfile() {
        try {
            setLoading(true)
            const user = supabase.auth.user()
            console.log(user)

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`username`)
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
                {console.log(session)}
            </div>
        </div>
    )
}


// how about we update profiles table with discord users.