import Layout from '../../components/layout.jsx'

export default function About() {
    return (
        <Layout PageTitle="Reacton">
            <div className='flex items-center flex-col'>
                <h3>
                    How to Use!
                </h3>
                <div className='text-left p-6 bg-[#2a2a2a] w-[51rem] rounded-md my-5'>
                    <p>
                        ⚫ - Start / ready <br/>
                        🔴 - Get ready. <br/>
                        🟢 - Click! <br/>
                        🔵 - You should see your results underneath. <br/>
                    </p>
                </div>
                <p className='bg-[#2a2a2a] p-6 rounded-md'>Look on my <a className="text-orange-400" href='https://jessedoka.co/blog'>blog</a> for updates</p>
            </div>
        </Layout>
    )
}