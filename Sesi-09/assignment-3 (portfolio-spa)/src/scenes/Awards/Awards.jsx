import s from './Awards.module.scss'
import BaseLayout from "../../layouts/BaseLayout/BaseLayout"

const Awards = () => {
    return (
        <BaseLayout>
            <div className={s.title}>
                <h1>Awards</h1>
            </div>
            <div className={s.content}>
                <p>
                    Some of my awards:
                </p>
                <ul className={s.listAwards}>
                    <br />
                    <li>1st Place in the 2021 Web Programming Competition</li>
                    <li>2nd Place in the 2020 Web Programming Competition</li>
                    <li>3rd Place in the 2019 Web Programming Competition</li>
                </ul>
            </div>
        </BaseLayout>
    )
}

export default Awards