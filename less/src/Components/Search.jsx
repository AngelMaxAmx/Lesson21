import './search.css';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Search() {
    
  return (
    <div className='search'>
        <input className='search-input' type='text'/>
        <MagnifyingGlassIcon className='h-6 w-6'/>
    </div>
  );
}

export default Search;