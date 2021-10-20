import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import {
    container,
    button_highlight,
    callout
} from './Auth.module.css'

export default function Auth() {
    const [loading, setLoading] = useState(false)

    const handleLogin = async () => {
        try {
            setLoading(true)
            const { error } = await supabase.auth.signIn({
                provider: 'discord'
            })
            if (error) throw error
        } catch (error) {
            // console.log(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={container}>
            <div>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        handleLogin()
                    }}
                    className={button_highlight}
                    disabled={loading}
                >
                    <span>{loading ? 'Loading' : 'Sign In With Discord'}</span>
                </button>
            </div>
            <p className={callout}>
                Link your Discord account to your Reacton.tech account to automatically be given a role every time you beat your personal best!
            </p>
        </div>
    )
}