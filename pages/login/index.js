import { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import Auth from '../../components/Auth'
import Account from '../../components/Account'
import Layout from '../../components/layout.jsx'
import { Line } from 'react-chartjs-2';

// let chart = {
//     width: '1000px',
//     height: '1000px',
//     margin: 'auto',
//     padding: '10px'
// }

export default function Home({times}) {
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(null)
    const [dtimes] = useState([])
    console.log(times)
    //  filter all times that are associated with this account
    
    
    // iterate through data and assign each data to the repective user. 
    useEffect(() => {
        setSession(supabase.auth.session())

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
        for (let i = 0; i < times.length; i++){
            console.log(times[i].timerDelt)
            if (times[i].username == supabase.auth.currentUser.user_metadata.full_name){
                dtimes.push(times[i].timerDelt)
            }
            else {
                times.splice(i)
            }
        }

    }, [times, dtimes])

    let tries = []
    for (let i = 0; i <= dtimes.length; i++){
        tries.push(i)
    }

    const state = {
        labels: tries,
        datasets: [
            {
                label: 'Reaction',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(78, 172, 207, 100)',
                borderWidth: 2,
                data: dtimes
            }
        ]
    }


    return (
        <Layout PageTitle='Reacton'>
            <div className="container" style={{ padding: '50px 0 100px 0' }}>
                { !session 
                    ? <Auth /> 
                    : <Account key={session.user.id} session={session}> 
                        <div>
                            <Line
                                data={state}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Average Reaction Time',
                                        fontSize: 20
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right'
                                    }
                                }}
                            />
                        </div>
                    </Account>
                
                }
            </div>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const { data: times } = await supabase
        .from('profiles')
        .select(`timerDelt, username`)
        // .eq(`username`, `${supabase.auth.currentUser.user_metadata.full_name}`)

    return {
        props: {
            times,
        }
    }
}