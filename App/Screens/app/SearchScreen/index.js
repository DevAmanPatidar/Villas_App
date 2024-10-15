import React,{useState} from 'react';
import Search from './component/Search';

const SearchView=()=>{
    const [screens,setScreens]=useState(1)
    const [ loginData , setLoginData]=useState({
        Search:"",
   })
   const searchScreen=()=>{
    setScreens()
   }
    return(
        <Search
        loginData={loginData}
        setLoginData={setLoginData}
        screens={screens}
        setScreens={setScreens}
        searchScreen={searchScreen}
        />
    )
}
export default SearchView;