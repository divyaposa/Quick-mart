
import { BsSearchHeartFill } from "react-icons/bs";
const SearchBox=()=>{

    return(
         <div className='headerSearch d-flex align-items-center'>
                <input 
                  type='text' 
                  placeholder='Type to find your next favorite...' 
                  className='searchInput'
                />
                <BsSearchHeartFill className='searchIcon' style={{ marginLeft: '8px', fontSize: '20px' }} />
              </div>
    )
}
 
export default SearchBox;