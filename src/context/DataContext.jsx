import React, { createContext } from 'react'
import axios from 'axios'

export const DataContext = createContext({})


const DataProvider = ({children}) => {

  const getDataCurrency = async (currency = 'usd') => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?x-cg-api-key=CG-Vc5Xu3ogLubuPasHiCaxt6QC&per_page=20&vs_currency=${currency}&per_page=20`
    const result = await axios.get(url)
    console.log(result.data)
    return result.data
  }
  return (
    <div>
      <DataContext.Provider value={{getDataCurrency}}>
        {children}
      </DataContext.Provider>
    </div>
  )
}

export default DataProvider