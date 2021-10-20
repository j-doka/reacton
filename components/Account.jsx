import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import {
    form_section,
    input_container,
    container,
    logBotton
} from "./Account.module.css"

export default function Account({ session }) {
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)

    useEffect(() => {
        getProfile()
    }, [session])

    async function getProfile() {
        try {
            setLoading(true)
            const user = supabase.auth.user()

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`username`)
                .eq('id', user.id)
                .single()

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setUsername(data.username)
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    async function updateProfile({ username }) {
        try {
            setLoading(true)
            const user = supabase.auth.user()

            const updates = {
                id: user.id,
                username,
                updated_at: new Date(),
            }

            let { error } = await supabase.from('profiles').upsert(updates, {
                returning: 'minimal', // Don't return the value after inserting
            })

            if (error) {
                throw error
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={container}>
            <div className={form_section}>
                <label>Email</label>
                <input 
                    className={input_container} 
                    type="text" 
                    value={session.user.email} 
                    disabled 
                />
            </div>
            <div className={form_section}>
                <label>Name</label>
                <input
                    className={input_container}
                    type="text"
                    value={session.user.user_metadata.full_name}
                    disabled
                />
            </div>
            <div>
                <button className={logBotton} onClick={() => supabase.auth.signOut()}>
                    Sign Out
                </button>
                {console.log(session)}
            </div>
        </div>
    )
}
