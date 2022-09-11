import React from 'react';

const AppFunction = () => {
    const [date, setDate] = React.useState(new Date());

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerID);
        }
    });

    const tick = () => {
        setDate(new Date());
    }

    return (
        <div className='App'>
            <h1>Realtime Clock dengan Functional Component</h1>
            <hr />
            <h2>{date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default AppFunction;