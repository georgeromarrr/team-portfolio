import React from 'react'
import profileData from './data'
import Profile from './profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import './aboutus.css'

const App = () =>{
  return (
    <div className="profile-pics pb-5">
      <div className="gallery container px-5">
        {profileData.map((datas) => (
          <Profile
            key={datas.id}
            name={datas.name}
            imagez={datas.image}
            content={datas.content}
            job={datas.job}
          />
        ))}
      </div>
    </div>
  );
}
export default App;