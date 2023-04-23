import Head from 'next/head'
import Sidebar from './sideBar'
import {
    container,
    highlight,
    nav_container,
    title_style,
    loading_bar,
    nav_block
} from './layout.module.css'

const Layout = ({children, PageTitle}) => {
    return(
        <main>
            <Head>
                <title>{PageTitle}</title>
                <link rel="shortcut icon" href="/favicon.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>
            <div className={container}>
                <div className={loading_bar}></div>
                <h1 className={title_style}>{PageTitle}<span className={highlight}>.tech</span></h1>
                <header className={nav_container}>
                    <nav className={nav_block}>
                        {/* Add Links to each one (tick )*/}
                        <Sidebar>
                        </Sidebar>
                    </nav>
                </header>
            </div>
            {children}
        </main>  
    )
}

export default Layout 