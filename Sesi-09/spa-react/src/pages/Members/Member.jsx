import { useParams } from "react-router-dom";


export default function Member() {
    let { memberName } = useParams();
    return (
        <div>
            <h3>{memberName}</h3>
            <p>
                Ini adalah halaman detail member {memberName}
            </p>
        </div>
    )
}

// export default function Member() {
//     let params = useParams();
//     return (
//         <div>
//             <h3>{params.memberName}</h3>
//             <p>
//                 Ini adalah halaman detail member {params.memberName}
//             </p>
//         </div>
//     )
// }


