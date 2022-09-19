import BaseLayout from "../../layouts/BaseLayout/BaseLayout"
import s from './Skills.module.scss';
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiGit,
} from 'react-icons/di';
import {
    SiPython,
    SiFlutter,
    SiTailwindcss,
    SiTensorflow,
} from 'react-icons/si';


const Skills = () => {
    return (
        <BaseLayout>
            <h2 className={s.skills}>
                Professional <b className={s.purple}>Skills</b>
            </h2>
            <div className={s.content}>
                <ul className={s.container}>
                    <li className={s.techIcon}>
                        <DiJavascript1 />
                    </li>
                    <li className={s.techIcon}>
                        <SiPython />
                    </li>
                    <li className={s.techIcon}>
                        <DiNodejs />
                    </li>
                    <li className={s.techIcon}>
                        <DiReact />
                    </li>
                    <li className={s.techIcon}>
                        <SiTailwindcss />
                    </li>
                    <li className={s.techIcon}>
                        <SiTensorflow />
                    </li>
                    <li className={s.techIcon}>
                        <SiFlutter />
                    </li>
                    <li className={s.techIcon}>
                        <DiGit />
                    </li>
                </ul>
            </div>
        </BaseLayout>
    )
}


export default Skills