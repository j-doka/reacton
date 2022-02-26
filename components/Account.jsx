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

export default function Account({ session, times }) {
    let username = session.user.user_metadata.full_name
    console.log({times})
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

export const getUserData = async () => {
    const { data: times, error } = await supabase
        .from("profiles")
        .select('*')

        if (error) {
            console.log(error)
        }
    
    return {
        props: {
            times
        }
    }
}

