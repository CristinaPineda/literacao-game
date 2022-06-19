import React from 'react';
import DescriptionStyled from '../../styles/home/description';

export default function Description() {
  return (
    <DescriptionStyled>
      <div className="divDescription">
        <h1 className="descriptionGame">O JOGO</h1>
        <p className="description">
        Literação, em sua forma original, é um jogo de tabuleiro, cujo objetivo educacional é auxiliar no processo de ensino-aprendizagem da Literatura Brasileira.
        </p>
        <p>
        O aluno tem que descobrir qual escritor, obra literária ou estilo literário foi sorteado por meio de dicas. Entre as divas estão incluídas curiosidades sobre a Literatura Brasileira.
        </p>
        <p>
        Na versão online, o jogo escolhe aleatoriamente 5 questões no banco de dados (o mesmo utilizado na versão do tabuleiro) e o aluno tem a chance de descobrir a resposta através de 10 dias em cada questão.
        </p>
      </div>
      <div className="divRules">
        <h1 className="gameRules">Regra do jogo</h1>
        <p className="rules">
          Na tela do jogo, digite seu nome e clique em OK.<br/>
          Seu nome ficará na tela e ao lado aparecerá sua pontuação na rodada.<br/>
        </p>
        <p>
        Clique em <strong>INICIAR JOGO</strong>. Uma dica aparecerá na lista, a região a que a pergunta se refere e o valor de pontos da pergunta em questão.<br/>
          <strong>ATENÇÃO!</strong> cada vez que você clicar em pedir mais dicas serão retirados os pontos da pergunta. Caso você acerte a questão, os pontos serão somados à sua pontuação total da rodada.
        </p>
        <p>Cada questão começa valendo 100 pontos e pode chegar a 10 pontos, caso sejam utilizadas todas as dicas.</p>
        <p>Se errar a questão, não serão somados nem subtraídos pontos.</p>
        <p>Permaneça na página do jogo até terminar a rodada. Caso saia do jogo, o progresso será perdido e um novo jogo terá que ser iniciado.</p>
      </div>
      <div className="jogar">
        <h3>E ai, está pronto? Vamos jogar!</h3>
      </div>
    </DescriptionStyled>
  );
}