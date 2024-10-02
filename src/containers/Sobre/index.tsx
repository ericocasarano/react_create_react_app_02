import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ratione
      optio placeat in. Veniam culpa mollitia odit in molestias rem quis est
      officia quia accusantium cum, pariatur velit, voluptatibus iusto!
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=ericocasarano&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ericocasarano&layout=compact&langs_count=7&theme=dracula"/>
    </GitHubSecao>
  </section>
)

export default Sobre
