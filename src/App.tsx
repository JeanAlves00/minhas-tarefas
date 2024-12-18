import BarraLateral from './components/BarraLateral'
import ListaDeTarefa from './components/ListaDeTarefa'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefa />
      </Container>
    </>
  )
}

export default App
