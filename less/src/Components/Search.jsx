
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Search() {
    
  return (
    <div className='flex items-center'>
        <input className='w-64 border border-slate-500 rounded-md ' type='text'/>
        <MagnifyingGlassIcon className='h-6 w-6'/>
    </div>
  );
}

export default Search;