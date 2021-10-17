import Image from 'next/image'
import { Component } from 'react'
import Lightning from '../public/icons8-lightning-bolt-96.png'
import Refresh from '../public/icons8-refresh-480.png'
import { 
    test_container,
    reac_container,
    test_bar,
    bar_item,
    reset_button,
    readyState,
    goState,
    blueState
} from './reactionbox.module.css'
import { Line } from 'react-chartjs-2';


class Reactionbox extends Component {
    state = {
        prev: [],
        previ: false,
        timerOn: false,
        timerStart: 0,
        timerEnd: 0,
        auto: false,
        ready: false,
        go: false,
        disabled: false,
        reacted: false, // logic
    }

    readyState = () => {
        this.setState({
            ready: true,
            disabled: true
        })
        setTimeout(() => {
            this.setState({
                go: true,
                ready: false,
                timerStart: Date.now(),
                disabled: false
            })
        }, Math.random() * 10000)
    }

    stopTimer = () => {
        this.setState({ 
            timerOn: false,
            timerEnd: Date.now(),
            reacted: true
         })
    }

    resetTimer = () => {
        this.setState({
            auto: false,
            ready: false,
            go: false,
            reacted: false,
            previ: this.state.prev[this.state.prev.length - 1],
            disabled: false
        })

    }

    render(){
        let { disabled } = this.state
        let { prev } = this.state
        let { previ } = this.state
        let { timerStart } = this.state
        let { timerEnd } = this.state
        let { ready } = this.state
        let { reacted } = this.state
        let { go } = this.state // responislbe for setting image to green
        let { auto } = this.state 
        let goTime = null
        let timerDelt

        if (go === true){
            goTime = 'ready'
        }

        

        if (reacted){
            disabled = true
            timerDelt = timerEnd - timerStart
            prev.push(timerDelt)
        }

        // This is gets rid of most anonmylous results, but it creates duplicates, I am not sure why tho. 

        const state = {
            labels: ['January', 'February', 'March',
                'April', 'May'],
            datasets: [
                {
                    label: 'Rainfall',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: this.state.prev
                }
            ]
        }

        

        return(
            <div>
                <div className={test_container}>
                    <button disabled={disabled} id={goTime} className={reacted === true ? blueState : go === true ? goState : ready === true ? readyState : reac_container} onClick={go === true ? this.stopTimer : this.readyState} >
                        {reacted || go || auto || ready == true ? '' : <Image src={Lightning} alt="Lightning Symbol" />}
                    </button>
                    <div className={test_bar}>
                        <div className={bar_item}>
                            {previ ? previ + 'ms' : '-'}
                        </div>
                        <div className={bar_item} >
                            <div>
                                {reacted === true ? timerDelt + 'ms' : '-'}
                            </div>
                        </div>
                        <button className={reset_button} onClick={this.resetTimer}>
                            <Image width={30} height={30} src={Refresh} alt="Refresh Symbol" />
                        </button>
                    </div>

                    {console.log(ready, go, goTime, auto, reacted, timerStart, timerEnd, prev, previ)}
                </div>
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

            </div>

        )
    }
}

export default Reactionbox


/* chatJS */