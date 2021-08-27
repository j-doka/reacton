import Head from 'next/head'
import Link from 'next/link'

const Layout = ({children, PageTitle}) => {
    return(
        <div>
            <Head>
                <title>{PageTitle}</title>
                <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            </Head>
            <main >
                <h1>ReactionTime<span>{/* add styling to the .tech*/}.tech</span></h1>
                <div>
                    <nav>
                        <ul>
                            {/* Add Links to each one (tick )*/}
                            <li className=''>
                                <Link href='/'>
                                    Test
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/'>
                                    Leaderboard
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/'>
                                    Discord
                                </Link>
                            </li>
                            <li className='text-white'>
                                <Link href='/'>
                                    About
                                </Link>
                            </li>
                            <li className='text-white'>
                                <Link href='/'>
                                    Log In
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/'>
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>
            {children}
        </div>  
    )
}

export default Layout 