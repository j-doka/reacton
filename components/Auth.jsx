import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

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
            console.log(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex w-full items-center flex-col">
            <div>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        handleLogin()
                    }}
                    className="bg-[#00c0ce] p-4 m-3 rounded-md"
                    disabled={loading}
                >
                    <span>{loading ? 'Loading' : 'Sign In With Discord'}</span>
                </button>
            </div>
            <p className="text-center max-w-md bg-[#2a2a2a] p-3 rounded-md">
                Link your Discord account to your Reacton.tech account! To save Your Score and get a New Personal Best!
            </p>
        </div>
    )
}
