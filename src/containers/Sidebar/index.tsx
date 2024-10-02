import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Érico Casarano</Titulo>
      <Paragrafo tipo="secundario" fontSize={20}>
        ericocasarano
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema>trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
