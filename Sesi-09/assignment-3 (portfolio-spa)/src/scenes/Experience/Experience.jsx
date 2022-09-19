import s from './Experience.module.scss'
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';


const Experience = () => {
    return (
        <BaseLayout>
            <h2 className={s.title}>
                Professional <b className={s.purple}>Experience</b>
            </h2>
            <div className={s.content}>
                <div className={s.card}>
                    <div className={s.box}>
                        <div className={s.date}>
                            <h3>Aug 2022</h3>
                        </div>
                        <div className={s.content}>
                            <div className={s.jobTitle}>
                                <strong>Fullstack Developer - Virtual Internship Experience</strong>
                                <span className={s.purple}>Investree</span>
                            </div>
                            <p>
                                <ul>
                                    <li>Learning Problem Solving</li>
                                    <li>Learnig Restful API</li>
                                    <li>Using Laravel</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={s.card}>
                    <div className={s.box}>
                        <div className={s.date}>
                            <h3>Jul 2022</h3>
                        </div>
                        <div className={s.content}>
                            <div className={s.jobTitle}>
                                <strong>UI/UX Designer - Virtual Internship Experience</strong>
                                <span className={s.purple}>Niagahoster</span>
                            </div>
                            <p>
                                <ul>
                                    <li>Learning Fundamentals of UI/UX Design</li>
                                    <li>Design and Research Checkout Page</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={s.card}>
                    <div className={s.box}>
                        <div className={s.date}>
                            <h3>Okt 2021 - Des 2021</h3>
                        </div>
                        <div className={s.content}>
                            <div className={s.jobTitle}>
                                <strong>Participant as Hacker</strong>
                                <span className={s.purple}>1000 Startup Digital</span>
                            </div>
                            <p>
                                <ul>
                                    <li>Developing and maintaining web application</li>
                                    <li>Designing and research for own startup</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </BaseLayout >
    )
}

export default Experience