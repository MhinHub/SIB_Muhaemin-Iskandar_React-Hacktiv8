const CardPastMeet = (props) => {
    const {
        dateTitle ="27 Maret 2023",
        meet = "#20 Meetup with Tokopedia",
        countWent = "30",
    } = props
    return (
        <div className="card d-flex justify-content-start mx-5 my-4" style={{width: 380, backgroundColor: "#BBEFFD4D"}}>
            <div className="card-body">
                <strong className="card-title">{dateTitle}</strong>
                <hr/>
                <p>{meet}</p>
                <p>{countWent} went</p>
                <button className="btn btn-secondary">View</button>
            </div>
        </div>
    )
}

export default CardPastMeet