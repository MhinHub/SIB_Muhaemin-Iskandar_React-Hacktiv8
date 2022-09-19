import s from './Interest.module.scss'
import BaseLayout from "../../layouts/BaseLayout/BaseLayout"
import {
    IoGameController,
    IoHeadset,
    IoBookSharp,
    
} from 'react-icons/io5'
import { RiMovieFill } from 'react-icons/ri';


const Interest = () => {
    return (
        <BaseLayout>
            <div className={s.title}>
                <h1>Interest</h1>
            </div>
            <div className={s.content}>
                <p>
                    Apart from programming, some other activities that I love to do are:
                </p>
                <ul className={s.listInterest}>
                    <br />
                    <li><IoGameController /> Playing games</li>
                    <li><IoBookSharp /> Reading Books</li>
                    <li><RiMovieFill/> Watching Youtube</li>
                    <li><IoHeadset /> Listening to music</li>
                </ul>
            </div>
        </BaseLayout>
    )
}

export default Interest