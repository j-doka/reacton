import { 
    test_container,
    reac_container,
    test_bar
} from './reactionbox.module.css'

const Reactionbox = () => {
    return(
        <div className={test_container}>
            <div className={reac_container}>

            </div>
            <div className={test_bar}>
                <div className={prev_reac}>
                    {/* Should contain previous Speed or '-' to signify nothing has been recorded yet*/}
                </div>
                <div className={curr_reac}>
                    {/* Time elapsed? */}
                </div>
                <button className={reset_button}>
                    {/* Start Again */}
                </button>
            </div>
        </div>
    )
}

export default Reactionbox