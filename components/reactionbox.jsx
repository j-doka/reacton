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
} from './reactionbox.module.css'

class Reactionbox extends Component {
    // timerOn: is the Timer On?
    // TimerStart:  ??? 
    // TimerTime totaTime elapsed
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    }

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime           
        })
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            })
        }, 10)
    }

    stopTimer = () => {
        this.setState({ timerOn: false })
        clearInterval(this.timer)
    }

    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        })
        clearInterval(this.timer)
    }

    render(){

        let { timerTime } = this.state
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2)
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2)
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2)
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2)
        
        return(
            <div className={test_container}>
            
                <button className={reac_container} onClick={this.startTimer}>
                    <Image src={Lightning} alt="Lightning Symbol" />
                </button>
                <div className={test_bar}>
                    <div className={bar_item}>
                        {/* Should contain previous Speed or '-' to signify nothing has been recorded yet*/}
                    </div>
                    <div className={bar_item}>
                        <div className="Stopwatch-display">
                            {console.log(timerTime, Date.now(), (Date.now() - timerTime))}
                            {hours} : {minutes} : {seconds} : {centiseconds}
                        </div>
                    </div>
                    <button className={reset_button} onClick={this.resetTimer}>
                        <Image width={30} height={30} src={Refresh} alt="Refresh Symbol"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Reactionbox