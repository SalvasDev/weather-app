
const getCities =  async (dataConsult, consult2, setConsult2) => {
   
   var infoCities = []
      
   if (consult2) {

     const key = '682500PcukwQUtq1UDd6XimUfAmBA5HL'


        const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'
        const query = `${dataConsult}?apikey=${key}`

        const response = await fetch(base + query)
        const data = await response.json()
          

        infoCities.push(data.DailyForecasts)

        console.log(infoCities)
        setConsult2(false)          
   }  
     return (
          infoCities 
     ) 
}
 
export default getCities




//   const appId = '8d57de8a9bc4336e429c1a0cd7ca0f38' 
        
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appId}`


//         const answer = await fetch(url)
//         const result = await answer.json()

//         //// Consulting next five days
//         const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${appId}`
//         const answerForec = await fetch(urlForecast)
//         const resultForec = await answerForec.json()


//         console.log(result)  
//         console.log(resultForec)    
//         setConsult(false)                

//    }


/// consulta un solo dia de accuweather

     //    const key = 'xlrN7OIuIl0VMtnIjjFBnDhKBVT7g0xM'

     //    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
     //    const query = `${dataConsult}?apikey=${key}`

     //
     //