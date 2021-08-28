import Head from 'next/head'
import Sidebar from './sideBar'
import {
    container,
    highlight,
    nav_container,
    title_style
} from './layout.module.css'

const Layout = ({children, PageTitle}) => {
    return(
        <main>
            <Head>
                <title>{PageTitle}</title>
                <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
            </Head>
            <div className={container}>
                <h1 className={title_style}>{PageTitle}<span className={highlight}>{/* add styling to the .tech*/}.tech</span></h1>
                <header className={nav_container}>
                    <nav>
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