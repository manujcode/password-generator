import { useState } from "react";

const usePasswordGenerator = ()=>{
    const [ password ,setPassword] = useState("");
    const [ errorMessage,setErrorMessage] = useState("")

  const genetatePassword = (checkboxData,len)=>{
       
     let charset ="";
     let generatedPassword = ""
     

     const selectOption = checkboxData.filter((data)=>data.state);
     
     if(selectOption.length===0){
         setErrorMessage("Select at least one option.")
         setPassword("")
         return;
        }

     selectOption.forEach(data => {
        switch ( data.title){
            case 'Include Uppercase Letters':
                charset+="QWERTYUIOPASDFGHJKLZXCVBNM" ;
                break;
            case 'Include Lowercase Letters':
                charset+='qwertyuiopasdfghjklzxcvbnm'  ;
                break;
            case 'Include Numbers' :
                charset+="1234567890"
                break;  
            case 'Include Symbols' :
                charset+='!@#$%^&*()'
                break;   
            default:
                break;    
        }
        
     });
       
     let ans =""
    
     for(let i =0;i<len;i++){
        const randomIND =  Math.floor(Math.random()*(charset.length));
         ans += charset[randomIND];
     }
     setErrorMessage("")
     setPassword(ans);
      return;


  }

return {password,errorMessage,genetatePassword};
}

export default usePasswordGenerator;
