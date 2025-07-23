import React from 'react'


const Academics = ({ img1, img02 }) => {
    return (
        <div>
            <div data-aos="fade-up" style={{ width: "90%", height: "300px", margin: "auto", display: "flex", justifyContent: "space-between", marginTop: "50px", boxShadow: "5px 5px 0px #262626", backgroundColor: "white", padding: "10px", alignItems: "center", borderRadius: "10px" }}>
                <div style={{ width: "50%", margin: "auto" }}>
                    <button>Academics</button>
                    <h1 style={{ fontSize: "40px" }}>Nurturing Young Minds for <br /> Success</h1>
                </div>
                <div style={{ width: "45%" }}>
                    <p>Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration.</p>
                </div>
            </div>
            <div style={{ width: "90%", margin: "auto", textAlign: "center", marginTop: "50px" }}>
                <button>Our Features</button>
                <h1>Our Special Features</h1>
                <p>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning <br /> that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
            </div>
            <div data-aos="fade-right" style={{ width: "90%", margin: "auto", display: "flex", gap: "25px", textAlign: "start", marginTop: "30px", flexWrap: "wrap", marginBottom: "20px" }}>
                <div style={{ width: "300px", padding: "30px 40px", borderRadius: "10px", backgroundColor: "white", boxShadow: "3px 3px 0px #262626" }}>
                    <h2>Thematic Learning</h2>
                    <p>Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.</p>
                </div>
                <div style={{ width: "300px", padding: "30px 40px", borderRadius: "10px", backgroundColor: "white", boxShadow: "3px 3px 0px #262626" }}>
                    <h2>Thematic Learning</h2>
                    <p>Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.</p>
                </div>
                <div style={{ width: "300px", padding: "30px 40px", borderRadius: "10px", backgroundColor: "white", boxShadow: "3px 3px 0px #262626" }}>
                    <h2>Thematic Learning</h2>
                    <p>Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.</p>
                </div>
                <div style={{ width: "300px", padding: "30px 40px", borderRadius: "10px", backgroundColor: "white", boxShadow: "3px 3px 0px #262626" }}>
                    <h2>Thematic Learning</h2>
                    <p>Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.</p>
                </div>
                <div style={{ width: "300px", padding: "30px 40px", borderRadius: "10px", backgroundColor: "white", boxShadow: "3px 3px 0px #262626" }}>
                    <h2>Thematic Learning</h2>
                    <p>Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.</p>
                </div>
                <div style={{ width: "300px", padding: "30px 40px", borderRadius: "10px", backgroundColor: "white", boxShadow: "3px 3px 0px #262626" }}>
                    <h2>Thematic Learning</h2>
                    <p>Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.</p>
                </div>
            </div>

            <div style={{ width: "90%", margin: "auto", textAlign: "center", marginTop: "50px" }}>
                <button>Our Fetaures</button>
                <h2 style={{ fontSize: "33px" }}>What Students Learn</h2>
                <p>At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for  <br />their future success. Our academic programs cover a wide range of subjects, allowing students to develop  <br />a strong foundation and discover their interests. Some key areas of learning include</p>
            </div>
            <div style={{ width: "90%", margin: "auto", display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <img style={{ width: "31%", height: "300px", margin: "auto" }} src={img1} alt="" />
                <img style={{ width: "31%", height: "300px", margin: "auto" }} src={img1} alt="" />
                <img style={{ width: "31%", height: "300px", margin: "auto" }} src={img1} alt="" />
                <img style={{ width: "31%", height: "300px", margin: "auto" }} src={img1} alt="" />
                <img style={{ width: "31%", height: "300px", margin: "auto" }} src={img02} alt="" />
                <img style={{ width: "31%", height: "300px", margin: "auto" }} src={img1} alt="" />
            </div>
            <div style={{ width: "90%", margin: "auto", textAlign: "center", marginTop: "50px" }}>
                <button>Our Gallery</button>
                <h2>Our Rooms Gallery</h2>
                <p>Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable <br /> experiences at our kindergarten school.</p>
            </div>
            <div style={{ display: "flex", width: "90%", margin: "auto", gap: "30px", textAlign: "center", marginTop: "30px", justifyContent: "center" }}>
                <button style={{ height: "45px", width: "96px", backgroundColor: "#FFEFE5", borderRadius: "10px", border: " 1px 1px 0px solid gray" }}  >All</button>
                <button style={{ height: "45px", width: "96px", borderRadius: "10px", border: " 2px 1px 0px solid gray" }} >Classrooms</button>
                <button style={{ height: "45px", width: "96px", borderRadius: "10px", border: " 1px 1px 0px solid gray" }} >Library</button>
                <button style={{ height: "45px", width: "96px", borderRadius: "10px", border: " 1px 1px 0px solid gray" }} >Science Lab</button>
                <button style={{ height: "45px", width: "96px", borderRadius: "10px", border: " 1px 1px 0px solid gray" }} >Computer Lab</button>
                <button style={{ height: "45px", width: "96px", borderRadius: "10px", border: " 1px 1px 0px solid gray" }} >Garden and Nature Area</button>
            </div>
        </div>
    )
}

export default Academics
