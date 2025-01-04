import { useState } from "react"

const useStrengthChecker =()=>{
 
    const [ strenght ,setStrength] = useState("")
      
    const getStrenght = (len)=>{
       
          if(len<1 ){
            setStrength("")
          }
          else if(len<4){
            setStrength("very weak")
          }
          else if(len<8){
            setStrength("poor")
          }
          else if(len<12){
            setStrength("Medium")
          }
          else if(len<16){
            setStrength("strong")
          }
          else{
            setStrength("very Strong")
          }

       return;
    }

    return {strenght,getStrenght};

}

export default  useStrengthChecker