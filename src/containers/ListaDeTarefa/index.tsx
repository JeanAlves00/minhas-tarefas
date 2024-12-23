import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Tarefa 1',
    descricao: 'Descrição da tarefa 1',
    prioridade: 'Urgente',
    status: 'Pendente'
  },
  {
    titulo: 'Tarefa 2',
    descricao: 'Descrição da tarefa 2',
    prioridade: 'Importante',
    status: 'Concluida'
  },
  {
    titulo: 'Tarefa 3',
    descricao: 'Descrição da tarefa 3',
    prioridade: 'Normal',
    status: 'Pendente'
  }
]

const listaDeTarefas = () => (
  <Container>
    <p>
      2 tarefas marcadadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
    </p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
            titulo={t.titulo}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default listaDeTarefas
