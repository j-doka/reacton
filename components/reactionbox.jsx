import Image from 'next/image'
import Lightning from '../public/icons8-lightning-bolt-96.png'
import Refresh from '../public/icons8-refresh-480.png'
import { 
    test_container,
    reac_container,
    test_bar,
    bar_item,
    reset_button,
    refresh
} from './reactionbox.module.css'

const Reactionbox = () => {
    return(
        <div className={test_container}>
            
            <div className={reac_container}>
                <Image src={Lightning} alt="Lightning Symbol" />
            </div>
            <div className={test_bar}>
                <div className={bar_item}>
                    {/* Should contain previous Speed or '-' to signify nothing has been recorded yet*/}
                </div>
                <div className={bar_item}>
                    {/* Time elapsed? */}
                </div>
                <button className={reset_button}>
                    <Image width={45} height={45} src={Refresh} alt="Refresh Symbol"/>
                </button>
            </div>
        </div>
    )
}

export default Reactionbox