
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-decoration-underline" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">Pricing</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}


function Card() {
    return (
        <div className="d-flex top-50 start-50 justify-content-center">
            <div className="card p-5 bg-primary bg-opacity-10" style={{ width: "50rem" }}>
                <div className="card-body ">
                    <h5 className="card-title">First Paragraph</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Open Modal</button>
                </div>
            </div>
        </div>
    )
}

function Modal() {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        This is a modal
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Header() {
    return (
        <div className="container d-flex justify-content-between">
            <h4 className="p-3">React Bootstrap</h4>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    )
}

function Footer() {
    return (
        <footer className="footer align-bottom d-flex justify-content-center">
            <p>Footer</p>
        </footer>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.Fragment>
        <Navbar />
        <Header />
        <Card />
        <Modal />
        <Footer />
    </React.Fragment>
)
