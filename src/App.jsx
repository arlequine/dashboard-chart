import { useContext, useEffect, useState } from 'react'
import { DataContext } from './context/DataContext'
import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import FilterSelect from './components/Filter/FilterSelect'

function App() {
  const [cryptos, setCryptos] = useState()
  const { getDataCurrency } = useContext(DataContext)
  const [ currentCrypto, setCurrentCrypto ] = useState(null)

  const getData = async () => {
    const coins = await getDataCurrency('usd')
    setCryptos(coins)
  }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="filters" >

              <FilterSelect options={cryptos} setVal={setCurrentCrypto} />

              <FilterSelectDate />

            </div>
          </Col>
        </Row>
        <Row>

        </Row>
      </Container>
    </>
  )
}

export default App
