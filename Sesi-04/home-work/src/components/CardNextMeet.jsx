const CardNextMeet = (props) => {
    const {
        title = "Awesome Meetup Event",
        dateVal = "1 September 2022",
        textVal = ""
    } = props

    return (
        <div className="card mx-5 my-4" style={{backgroundColor: "#BBEFFD4D"}}>
            <div className="card-body">
                <strong className="card-title">{title}</strong>
                <p>{dateVal}</p>
                <div className="card-text">
                    Hello, React Nerd!
                    <br></br>
                    Get Ready for biggest our Meetup Event, React Festival!
                    <br></br>
                    On the meetup we'll have a lot of fun and talk deeply about React. Even, we'll build a Web or Mobile App for Start Up and Small business.
                    <br></br>
                    See you there!
                    <br></br>
                </div>
            </div>
        </div>
    )
}

export default CardNextMeet