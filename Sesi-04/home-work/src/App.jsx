import CardMeet from "./components/CardMeet"
import CardMember from "./components/CardMember"
import AboutMeet from "./components/AboutMeet"
import CardNextMeet from "./components/CardNextMeet"
import CardPastMeet from "./components/CardPastMeet"
import Navbar from "./components/Navbar"



function App() {

  return (
    <>
      <Navbar />
      <CardMeet />
      <h3 className="pt-4 ms-3">Next Meetup</h3>
      <CardNextMeet />
      <h3 className="pt-4 ms-3">About Meetup</h3>
      <AboutMeet />
      <h3 className="pt-4 ms-3">Members</h3>
      <CardMember />
      <h3 className="pt-4 ms-3">Past Meetups</h3>
      <div className="d-flex justify-content">
        <CardPastMeet />
        <CardPastMeet dateTitle={"28 Maret 2023"} />
        <CardPastMeet dateTitle={"29 Maret 2023"} />
      </div>
      <footer className="footer mt-auto py-3 d-flex justify-content-center">
        <p>Copyright Muhis 2022</p>
      </footer>
    </>
  )
}

export default App
