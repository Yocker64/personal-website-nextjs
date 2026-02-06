import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

function SearchBar() {
    const{ search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
  return showSearch ? (
    <div className='border-t border-b g-gray-50 text-center p-10'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-55 mx-3 rounded-full 2-3/4 sm:w-1/2'>
          <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className='flex-1 outline-none bg-inherit text-sm' placeholder='Buscar' />
          <img src={assets.search_icon} className='w-4' alt="" />
      </div>
      <img src={assets.cross_icon} className='inline w-3 cursor-pointer' onClick={()=>setShowSearch(false)} alt="" />
    </div>
  ) : null;
}

export default SearchBar