import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <div style={{ width: "99%", height: "29px", borderRadius: "6px", backgroundColor: "#FF9E66" }}>
        <div s>
          <p style={{ color: "#262626", textAlign: "center", paddingTop: "5px" }}>Admission is Open, Grab your seat now</p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", width: "95%", margin: "auto", border: "1px solid gray", borderRadius: "7px", marginTop: "10px", padding: "3px" }}>
        <div>
          <p>Little Learns</p>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <Link to={'/'} style={{textDecoration:"none"}}>
            <p>Home</p>
          </Link>
          <Link to={'/about'} style={{textDecoration:"none"}}>
            <p>About Us</p>
          </Link>
          <Link to={'/academics'} style={{textDecoration:"none", color: "black"}}>
            <p>Academics</p>  
          </Link>
          <p>Admissions</p>
          <p>Student Life</p>
          <p>Contact</p>
        </div>
      </div>
      <Outlet />
<footer>
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "15px",
      padding: "30px 15px",
      border: "2px solid black",
      borderRadius: "12px",
      backgroundColor: "#fff",
      color: "#333",
      fontSize: "14px",
      lineHeight: "1.5",
      marginTop: "20px",
    }}
  >
    <div style={{ flex: "1 1 200px" }}>
      <img src="hwwl/src/Logo (5).png" alt="logo" style={{ width: "100px", marginBottom: "10px" }} />
      <p style={{ color: "#4C4C4D", marginBottom: "8px" }}>
        We believe in the power of play to foster creativity, problem-solving skills, and imagination.
      </p>
      <p style={{ marginBottom: "4px" }}>hello@littlelearners.com</p>
      <p style={{ marginBottom: "4px" }}>+91 91813 23 2309</p>
      <p>Somewhere in the World</p>
    </div>

    <div style={{ flex: "1 1 150px" }}>
      <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Home</p>
      <p>Features</p>
      <p>Our Testimonials</p>
      <p>FAQ</p>
    </div>

    <div style={{ flex: "1 1 150px" }}>
      <p style={{ fontWeight: "bold", marginBottom: "8px" }}>About Us</p>
      <p>Our Mission</p>
      <p>Our Vision</p>
      <p>Awards</p>
      <p>History</p>
      <p>Teachers</p>
    </div>

    <div style={{ flex: "1 1 150px" }}>
      <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Academics</p>
      <p>Special Features</p>
      <p>Gallery</p>
    </div>

    <div style={{ flex: "1 1 150px" }}>
      <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Contact Us</p>
      <p>Information</p>
      <p>Map & Direction</p>
    </div>
  </div>
</footer>


    </div>
  )
}

export default Layout;