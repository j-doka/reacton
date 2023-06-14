import Head from 'next/head'
import Sidebar from './sideBar'

const Layout = ({children, PageTitle}) => {
    return(
        <main>
            <Head>
                <title>{PageTitle}</title>
                <link rel="logo" href="/favicon.svg" />
            </Head>
            <div className="flex w-full items-center flex-col">
                <div className="animate-loading bg-green-500 h-1.5 rounded-full fixed top-0 left-0"></div>
                <h1 className="bg-[#2a2a2a] p-4 rounded-lg cursor-pointer font-medium text-3xl">{PageTitle}<span className="text-[#4ECF75]">.tech</span></h1>
                <header className="mt-12">
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