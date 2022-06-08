import React from 'react';
import DescriptionStyled from '../../styles/home/description';

export default function Description() {
  return (
    <DescriptionStyled>
      <div className="divDescription">
        <h1 className="descriptionGame">O JOGO</h1>
        <p className="description">
          Literação, em sua forma original é um jogo de tabuleiro cujo objetivo educacional é auxiliar no processo de ensino-aprendizagem da literatura Brasileira.
        </p>
        <p>
          O aluno tem que descobrir qual escritor, obra ou estilo literário foi sorteado por meio de dicas. Entre as dicas, são incluidas curiosidades sobre a literatura brasileira.
        </p>
        <p>
          Na versão online, o jogo escolhe aleatóriamente 5 questões no banco de dados (o mesmo utilizado na versão de tabuleiro) e o aluno tem a chance de descobrir a resposta com até 10 dicas para cada questão.
        </p>
      </div>
      <div className="divRules">
        <h1 className="gameRules">Regras do jogo</h1>
        <p className="rules">
          Na tela do jogo, digite seu nome e clique em OK.<br/>
          Seu nome ficará na tela, ao lado aparecerá sua pontuação da rodada.<br/>
        </p>
        <p>
        Clique em <strong>INICIAR JOGO</strong>, uma dica aparecerá na lista, a região que a pergunta faz referência e o valor de pontos que a pergunta irá valer.<br/>
          <strong>ATENÇÃO!</strong> Cada vez que você clicar em pedir mais dicas serão <strong>retirados 10 pontos</strong> da pergunta. Caso você acerte a questão, seus pontos serão somados à pontuação total da rodada.
        </p>
        <p>Cada questão começa valendo 100 pontos e pode chegar a 10 pontos caso sejam utilizadas todas as dicas.</p>
        <p>Se errar a questão não serão somados nem subtraidos pontos.</p>
        <p>Permaneça na página do jogo até terminar a rodada, caso saia o progresso do jogo será perdido e um novo jogo terá de ser iniciado.</p>
      </div>
      <div className="jogar">
        <h3>E ai, está pronto? Vamos jogar!</h3>
      </div>
    </DescriptionStyled>
  );
}