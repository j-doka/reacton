import Image from 'next/image'
import { supabase } from '../utils/supabaseClient'

export default function Account({ session, children }) {
    let username = session.user.user_metadata.full_name
    
    return (
        <div className="flex flex-col items-center">
            <p className="text-center p-3 bg-[#2a2a2a] rounded-md">
                Discord Account Linked!
            </p>
            <div className="flex flex-col items-center m-5 p-1 overflow-hidden rounded-full ring-2 ring-[#4ec6cf]">
                <Image
                    className='rounded-full'
                    src={session.user.user_metadata.avatar_url}
                    alt="Discord Avatar"
                    height={80}
                    width={80}
                />
            </div>
            <p>{username}</p>
            <div>
                <button className="bg-[#cf4e4e] m-8 w-[11rem] h-[2.5rem] rounded-md cursor-pointer" onClick={() => supabase.auth.signOut()}>
                    Sign Out
                </button>
            </div>
            {children}
        </div>
    )
}

