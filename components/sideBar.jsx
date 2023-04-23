import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { supabase } from '../utils/supabaseClient'




const Sidebar = () => {
    const router = useRouter()

    const session = supabase.auth.session()
    let Login
    session ? Login = session.user.user_metadata.full_name : Login = 'Log In'

    const menu = [
        { title: 'Test', path: '/' },
        { title: 'About', path:'/about' },
        { title: Login, path: '/login' },
    ]


    return (
        <ul className="flex gap-4">
            {menu.map((item, index) => {
                return (
                    <li key={index}>
                        <Link href={item.path}>
                            <a
                                className={router.pathname === item.path
                                    ? "bg-[#2a2a2a] text-white block px-3 py-2 rounded-md text-base"
                                    : "text-gray-300 hover:bg-[#2a2a2a] hover:text-white block px-3 py-2 rounded-md text-base ease-in-out duration-500"
                                }
                            >
                                {item.title}
                            </a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Sidebar