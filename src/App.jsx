import { useState } from 'react'
import axios from 'axios';
import Pics from './Pics';
function App() {
  const [Catergory,setCatergory] = useState('');
  const [Photos,setPhotos] = useState([]);  //to add data from api
  const [IsError ,setIsError] = useState(false);  //settting error
  
  const API = import.meta.env.VITE_API_KEY;

  const FetchPhotos = async()=> {
    try {
      setIsError(false);  
      console.log("getting photos ...")

      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${Catergory}&per_page=12&client_id=${API}`
      );

      console.log(response.data.results)
      setPhotos(response.data.results);

      console.log("Got Photos!");
      if(response.data.results.length === 0){  //if not correct category name by user
        setIsError(true);
      }
    } 
    catch(error){
      console.log(error);
      setIsError(true);
    }
   

  }
  const RenderPics = ()=> {
    return Photos.map((photo)=> ( //iterating over array
      <Pics key={photo.id}  src={photo.urls.small} FullSrc={photo.urls.full} alt={photo.alt_description} photographer={photo.user.name} profileURL = {photo.user.profile_image.small} description={photo.alt_description}/>
    )

    )
    
  }

  return (
    <>
      <center> 
        <div className='p-8 '>
          <input 
            type='text'
            placeholder='Enter Catergory Name'
            value={Catergory}
            onChange={(e)=>setCatergory(e.target.value) }
            className='placeholder:italic placeholder:text-slate-400  border border-grey-400 px-2 py-1 mr-2 rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm md:text-lg'

          /> 
          <button
            onClick={ FetchPhotos}
            className=' text-sky-500 border  border-sky-500 hover:text-white hover:bg-sky-500 px-4 py-2 rounded-full mt-4'> Search
          </button>
          {
            IsError!== true?  //if error occured then render error message otherwise render grid
             <div className='grid grid-row sm:grid-cols-3 md:grid-cols-4 '>   {RenderPics()}
             </div>
             : <p className='font-lg text-red-600 font-bold'> 
                   Enter the correct category name or wait for some time 
               </p>
          }
         
          
          
        </div> 
      </center>
    </>
  )
}

export default App
