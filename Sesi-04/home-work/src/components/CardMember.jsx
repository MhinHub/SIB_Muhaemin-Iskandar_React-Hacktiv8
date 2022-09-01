const CardMember = (props) => {
    const {
        title ="Organizers",
        name = "Muhaemin Iskandar",
        others = "4 others"
    } = props

    return (
        <div className="card mx-5 my-4" style={{backgroundColor: "#BBEFFD4D"}}>
            <div className="card-body d-flex justify-content-start">
                <img className="rounded-circle me-3 position-relative" src="https://source.unsplash.com/random/83x83" style={{size: 83}} alt="gambar" />
                <div>
                    <strong className="card-title">{title}</strong>
                    <div className="card-text d-flex justify-content-start mt-4">
                        <p className="me-4">{name}</p>
                        <p>{others}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardMember