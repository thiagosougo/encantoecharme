import React from "react";
import "./benefits.css";

const infosBenefits = [
  {
    title: "Benefícios",
    description:
      "Você vai receber um passo a passo com explicações, demonstrações, exercícios, tudo que for necessário para o seu crescimento pessoal.",
  },
  {
    title: "Aulas práticas",
    description:
      "Conteúdo 100% aplicável no seu dia a dia. Você receberá demonstrações, explicações, exercícios e tarefas para efetivar sua evolução na etiqueta européia.",
  },
  {
    title: "Do básico ao avançado",
    description:
      "Você aprenderá desde mesa formal, informal, decorativa, ordem dos talheres, recepção e convite, arranjos florais até como se portar em um evento formal, como ser uma boa anfitriã e usar a etiqueta européia.",
  },
  {
    title: "Área vip e suporte",
    description:
      "Você terá acesso a áreas Vip's exclusivas para alunos e suporte para tirar todas as suas dúvidas.",
  },
  {
    title: "+ de 20 aulas",
    description:
      "Cronograma montado e planejado para sua evolução na etiqueta com mais de 20 aulas gravadas em vídeo e áudios de exercícios - PDF's de Bônus",
  },
  {
    title: "Acesso por um ano",
    description:
      "Ao adquirir o curso, você tem até 1 ano para concluir, podendo acessar de forma ilimitada neste período.",
  },
];
export default function Benefits() {
  return (
    <div className="flexBenefits">
      <div className="benefitsSection">
        {infosBenefits.map((content, index) => (
          <div className="cardBenefits">
            <h2>{content.title}</h2>
            <p>{content.description}</p>
          </div>
        ))}
      </div>

      <div className="borderBenefits"></div>
    </div>
  );
}
