import Image from 'next/image'
import { supabase } from '../utils/supabaseClient'
import {
    container,
    logBotton,
    disimage,
    discordInfo,
    callout
} from "./Account.module.css"

export default function Account({ session, children }) {
    let username = session.user.user_metadata.full_name
    
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
            {children}
        </div>
    )
}

