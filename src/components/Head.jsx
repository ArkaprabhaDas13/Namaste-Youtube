import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
import { YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/constants'
import clockIcon from '../utils/clockIcon.png'
import { cacheResults } from '../utils/searchSlice'
import { addKeyword } from '../utils/resultsSlice'


const Head = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestionList, setSuggestionList] = useState([])
  const [suggestionOpen, setSuggestionOpen] = useState(false)
   
  const toggle = useSelector(store => store.app?.isMenuOpen)
  const searchCache = useSelector(store=>store.search)      // we are caching the results of the previously searched items so that we do not have to make unnecessary API calls
  const keyword = useSelector(store=>store.results?.keyword)
  // console.log(keyword)
  
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    // console.log("UseEffect called after ", searchQuery);
    // DEBOUNCING:
    // make an API call after every key press but decline the API call if the difference between the 2 calls is <200ms
    const timer = setTimeout(() => {
      if(searchCache[searchQuery])                      // if the searchCache obj contains the searchQuery in the REDUDX Store...
      {
        setSuggestionList(searchCache[searchQuery]  )   // setting the value of the searchQuery key
      }
      else{
        getSuggestionsFunction();
      }
    }, 500)
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery])

  
  
  // API CALL
  const getSuggestionsFunction = async () => {
    const suggestions = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery)
    const suggestions_json = await suggestions.json();
    setSuggestionList(suggestions_json[1])
    
    // CACHE the data into the REDUX store
    dispatch(cacheResults({[searchQuery] : suggestions_json[1]}))     //when you use square brackets [] to define a key in an object literal, it allows you to use the value of a variable as the key
  }
  
  // console.log(suggestionList)
  // console.log("SearchCache = ", searchCache)


  const toggleHandler = () => {
    dispatch(toggleMenu())
  }

  const handleInput = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSearch = ()=>{
    console.log("SEARCH CLICKED !!!", searchQuery)
    dispatch(addKeyword(searchQuery));
    
  }


  return (
    <div className='grid grid-flow-col p-4'>

      <div className='flex col-span-1'>
        <img onClick={() => toggleHandler()} className='h-8 cursor-pointer' src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt="hamburger menu icon" />
        <img  className='h-8 mx-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="Youtube logo" /> 
      </div>


      <div className='flex flex-col'>

        <div className='col-span-10 text-center'>
          <input className='w-[80%] py-2 px-4 border border-gray-400 rounded-l-[30px]' type="text" value={searchQuery} onChange={handleInput} onBlur={() => setSuggestionOpen(false)} onFocus={() => setSuggestionOpen(true)} />
          <button className='p-2 px-4 border border-gray-400 rounded-r-full bg-gray-50 hover:bg-slate-300' onClick={handleSearch}>Search</button>
        </div>

        {suggestionOpen &&
          (<div className='absolute border rounded-md shadow-md border-gray-300 w-[32.7%] py-2 px-3 p mt-12 text-gray-400 ml-8 bg-white'>
            <ul className=''>
              {
                suggestionList.map((suggestion, index) => (
                  <li className='px-5' key={index}>
                    <div className='flex'>

                      <img className='w-5 h-5 mx-2' src={clockIcon} alt="" />
                      <h1>{suggestion}</h1>

                    </div>
                  </li>
                ))
              }
            </ul>

          </div>)
        }

      </div>


      <div className='col-span-1'>
        <img className='h-8' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="user icon" />
      </div>

    </div>
  )
}

export default Head