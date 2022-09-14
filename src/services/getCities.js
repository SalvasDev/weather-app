
const getCities =  async (location, consult, setConsult) => {

   
   if (consult) {

        const appId = '8d57de8a9bc4336e429c1a0cd7ca0f38' 
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appId}`


        const answer = await fetch(url)
        const result = await answer.json()

        //// Consulting next five days
        const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${appId}`
        const answerForec = await fetch(urlForecast)
        const resultForec = await answerForec.json()


        console.log(result)  
        console.log(resultForec)    
        setConsult(false)                

   }
   
      
      
    return (
        getCities
    )
}
   
 
export default getCities




// const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;