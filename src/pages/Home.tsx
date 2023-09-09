import Background from '../assets/images/Comic.jpg'
import Album from '../components/Album'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div>
          <Album />
        </div>
    </div>
  )
}


export default Home