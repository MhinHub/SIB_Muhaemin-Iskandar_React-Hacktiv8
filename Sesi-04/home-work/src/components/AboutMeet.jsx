const AboutMeet = (props) => {
    const {
        text = "Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.",
        sosmedText = "@JakartaJS and we use the hashtag #jakartajs"
    } = props
    return (
        <div className="mx-5 p-4" style={{backgroundColor: "#BBEFFD4D"}}>
            <p>{text}</p>
            <p>Twitter: {sosmedText}</p>
        </div>
    );
}

export default AboutMeet;