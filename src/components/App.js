import React from 'react'
import profileData from './data'
import Profile from './profile'

const App = () =>{
  return(
     <div className='container'>
       <div className="gallery">
       {profileData.map(datas => (
        <Profile
          key= {datas.id}
          name= {datas.name}
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