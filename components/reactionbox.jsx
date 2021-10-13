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
            previ: this.state.prev[this.state.prev.length - 1]
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

        if (go === true){
            goTime = 'ready'
        }

        let timerDelt = timerEnd - timerStart
        prev.push(timerDelt)

        if (reacted){
            disabled = true
        }

        

        return(
            <div className={test_container}>
                <button disabled={disabled} id={goTime} className={ reacted === true ? blueState : go === true ? goState : ready === true ? readyState : reac_container} onClick={go === true ? this.stopTimer : this.readyState } >
                    {ready == true ? '' : <Image src={Lightning} alt="Lightning Symbol" />}
                </button>
                <div className={test_bar}>
                    <div className={bar_item}>
                        {previ ? previ + 'ms' : '-'}
                    </div>
                    <div className={bar_item} >
                        <div>
                            {console.log(ready, go, goTime, auto, timerStart, timerEnd, prev, previ)}
                            {reacted === true ? timerDelt + 'ms' : '-'}
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

// reaction time - time it takes for the user to click on green
// so starttime - when go value is true
// endTime - when clicked. 