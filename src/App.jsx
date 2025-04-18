import React from 'react'
import './App.css'

function App() {

  const [followers, setfollowers] = React.useState(836);
  const [soll, sollset] = React.useState(true);

  function followerscount() {
    setfollowers(followers + 1);

    sollset(!soll);
    if (!soll) {
      setfollowers(followers - 1);
    }
  }
  console.log(soll);

  return (
    <>
      <h1 className='user'>User Display</h1>
      <div className="card ">
        <div className="container d-flex">

          <div className=" pt-2 ps-3 p-3">

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrnShY70fnrWG1aiJ0yFXNsjaIFe3od1XYTg&s" alt="" />
          </div>
          <div className='pt ps-5' >
            <h2 className='pt-3'> Solanki_RanjitSinh </h2>
            <b className='pt-1'> Gota,VasantNagr Township</b>

            <button style={{width:"100px"}} className='mt-3 btn btn btn-primary' onClick={followerscount}>{soll ? "follow" : "unfollow"} </button>

            <div className='d-flex pt-4'>



              <div className="post ">
                <b>Posts</b>
                <p>23</p>
              </div>
              <div className="followers ps-5">
                <b>Followers</b>
                <p>{followers}</p>
              </div>

            </div>

          </div>


        </div>
      </div>





    </>


  );
}



export default App
