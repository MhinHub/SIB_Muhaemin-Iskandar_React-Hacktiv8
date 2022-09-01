const CardMeet = (props) => {
    const {
        title = "Hacktiv8 Meetup",
        locationVal = "Jakarta, Indonesia",
        membersVal = "1,078",
        organizersVal = "Muhaemin Iskandar"
    } = props

    return (
        <div className="card mx-3 mt-2" style={{backgroundColor: "#BBEFFD4D"}}>
            <div className="card-body">
                <ul className="d-flex flex-row">
                    <div>
                        <img className="me-5" src="https://source.unsplash.com/random/280x275" alt="gambar" />
                    </div>
                    <div className="py-3">
                        <strong className="card-title">{title}</strong>
                        <div className="card-text d-flex justify-content py-4">
                            <div className="me-4">
                                <p>Location</p>
                                <p>Members</p>
                                <p>Organizers</p>
                            </div>
                            <div>
                                <p>{locationVal}</p>
                                <p>{membersVal}</p>
                                <p>{organizersVal}</p>
                            </div>
                        </div>
                        <button className="btn btn-primary" style={{width: 190, height: 50}}>Join Us</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default CardMeet