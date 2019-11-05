import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from 'root/hocs/withAnalytics';

const Title = styled.h1`
    color:#f15a24;
    font-size: 40px;
    text-align: center;
`;

const TextMain = styled.p`
    max-width: 800px;
    margin: auto;
    font-family: sans-serif;
    text-align: justify;
    color: #515150;
`;

const ContentHome = styled.section`
    margin: auto;
    width: 800px;
    padding: 20px;
    background-color: #f15a244a;
    text-align: center;

    a{
        text-decoration: none;
        background-color: #f15a24;
        color: white;
        padding: 5px 15px;
    }
`;

const Home = () => (
    <>
        <Head>
            <title>Chuck Norris App</title>
        </Head>
        <ContentHome>
            <Title>História de Chuck Norris</Title>

            <TextMain>Chuck Norris (1940) é um ator norte-americano, campeão mundial de karatê que se tornou um grande ícone de filmes de ação.

            Chuck Norris (1940), nome artístico de Carlos Ray Norris, nasceu em Ryan, Oklahoma, nos Estados, no dia 10 de março de 1940. Com 18 anos, alistou-se na Força Aérea Americana e foi mandado para uma base aérea localizada em Osan, na Coreia do Sul. Foi lá que ele começou sua formação em artes marciais e recebeu o apelido de Chuck. Teve seus primeiros contatos com o Tangsudo (Tang Soo Do) e o Taekwondo, duas artes marciais tipicamente coreanas. <br/>Conquistou a faixa preta do Taekwondo.

            Quando regressou aos Estados Unidos continuou servindo como policial militar na Base March Air Reserve, na Califórnia, onde permaneceu até 1962, quando foi dispensado. Trabalhou para a empresa Northrop Corporation e posteriormente abriu uma rede de escolas de karatê. Tornou-se um especialista em Karatê, chegando a ser campeão mundial invicto por seis vezes na categoria peso médio. Na década de 70, Chuck Norris criou sua própria arte marcial, o Chun Kuk Do, quando fundou e se tornou presidente da United Fighting Arts Federation.

            Em um evento de artes marciais conheceu o ator Bruce Lee, que o convidou para estrelar no filme “O Voo do Dragão”, escrito e produzido em 1972, pelo próprio Lee. No filme, Lee e Norris encenam uma luta no histórico Coliseu em Roma, cena lembrada até hoje pelos fãs de filmes de artes marciais. <br/>Em 1974, Norris passou a ter aulas de representação na Metro-Goldwyn-Mayer.

            Em seguida, Chuck Norris atuou em diversos filmes de ação, na maioria interpretando papel de herói e demonstrando suas habilidades nas artes marciais, entre eles: “Breaker! Breaker!” (1977), “Good Guys Wear Black” (1978), “The Octagon” (1980), “An Eye For An Eye” (1981), “Lone Wolf McQuade” (1983), “Missing in Action” (1984) e “Code of Silence” (1985). <br/>No entanto, seu maior sucesso veio com a série “Walker Texas Ranger”, exibida entre 1993 a 2001.

            Em 1990, Chuck Norris recebeu o “Cinturão Preto de Grande Mestre de 8º grau”, se tornando o primeiro ocidental com o mais alto grau do Tae Kwon Do. Nesse mesmo ano, criou a Chun Kuk Do, uma arte marcial baseada principalmente no Tang Soo Do, mais elementos de vários outros estilos de combate, incluindo um código de honra, regras de conduta e um sistema de oito cinturões.

            Chuck Norris realizou diversas contribuições para organizações não governamentais. <br/>Em 1990 criou a “United Frghting Arts Federation” e a “KickStart”, programas que promovem o ensino das artes marciais para crianças em risco, com o objetivo de afastá-las das drogas. Em 1999, passou a fazer parte da “Martial Arts History Museum’s Hall of Fame”. Em 2000, recebeu o “Golden Lifetime Achievement Award”, World Karate Union Hall of Fame.

            Chuck Norris foi casado durante 30 anos com Diane Holechek, com quem teve dois filhos. Divorciou-se em 1988, e casou-se com a ex-modelo Gena O’Kelley, em 1998, com quem teve um casal de gêmeos. Convertido ao cristianismo, tem feito campanhas em favor do ensino bíblico nas escolas públicas dos Estados Unidos.</TextMain>
            <Link href="/joker">
                <a>Fatos</a>
            </Link>
        </ContentHome>
    </>
);

export default withAnalytics()(Home);