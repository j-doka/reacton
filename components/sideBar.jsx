import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
    non_active,
    active,
    nav_links
} from './sidebar.module.css'

const menu = [
    { title: 'Test', path: '/' },
    { title: 'Leaderboard', path: '' },
    { title: 'Discord', path: '' },
    { title: 'About', path: '' },
    { title: 'Log In', path: '' },
    { title: 'Sign Up', path: '' }
]

const Sidebar = () => {
    const router = useRouter()

    return (
        <ul className={nav_links}>
            {menu.map((item, index) => {
                return (
                    <li key={index}>
                        <Link href={item.path}>
                            <a
                                className={`${router.pathname === item.path
                                    ? {active}
                                    : {non_active}
                                    }`}
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