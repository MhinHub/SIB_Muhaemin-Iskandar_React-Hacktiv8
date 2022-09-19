import { Outlet } from "react-router-dom";
import getItems from "./ItemsData";
import ItemRow from "./ItemRow";

const Items = () => {
    let items = getItems();
    return (
        <div>
            <h1>Items</h1>
            <p>
                Klik tombol <b>Show Detail</b> untuk melihat detail item
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <ItemRow key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
            <Outlet />
        </div>
    );
}

export default Items;
