import { useParams } from "react-router-dom";
import getItems from "./ItemsData";

export default function ItemDetail(){
    let params = useParams();
    let items = getItems();
    let item = items.find((item) => item.id === parseInt(params.itemId));
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Power: {item.power}</p>
        </div>
    )
}