import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { supabase } from '../utils/supabaseClient'
import {
    non_active,
    active,
    nav_links
} from './sidebar.module.css'




const Sidebar = () => {
    const router = useRouter()

    const session = supabase.auth.session()
    let Login
    session ? Login = session.user.user_metadata.full_name : Login = 'Log In'

    const menu = [
        { title: 'Test', path: '/' },
        { title: 'About', path: '/about' },
        { title: Login, path: '/login' },
    ]


    return (
        <ul className={nav_links}>
            {menu.map((item, index) => {
                return (
                    <li key={index}>
                        <Link href={item.path}>
                            <a
                                className={router.pathname === item.path
                                    ? active
                                    : non_active
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