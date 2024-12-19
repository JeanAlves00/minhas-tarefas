import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const listaDeTarefas = () => (
  <Container>
    <p>
      2 tarefas marcadadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
    </p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </Container>
)

export default listaDeTarefas
