import UserCard from './components/UserCard.jsx'
import './App.css'
import dogImage from './assets/dog.avif'
import foxImage from './assets/fo______X.jpg'
import pantherImage from './assets/panther.avif'
  
function App() {
  return (
    <div className="app">
 <UserCard name="dog" image={dogImage} style={{borderRadius:"50px"}} />
      <UserCard name="fox" image={foxImage}  />
      <UserCard name="panther" image={pantherImage} />
    </div>
     
   )
}

export default App;