import Quiz from "./components/Quiz.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";
const IMAGE =
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2984fc54c2eccfed432ac8a78e90757b574178c4-418x473.jpg?accountingTag=LoL?auto=format&fit=fill&q=80&w=352";

const questions = [
  {
    id: 1,
    question: "Кто из чемпионов обладает ультимейтом «Requiem»?",
    options: ["Karthus", "Lux", "Ezreal", "Morgana"],
    correctIndex: 0, // Karthus
    image: IMAGE,
  },
  {
    id: 2,
    question: "Какой чемпион способен телепортироваться к союзникам с ультой?",
    options: ["Shen", "Galio", "Twisted Fate", "Pantheon"],
    correctIndex: 0, // Shen
    image: IMAGE,
  },
  {
    id: 3,
    question: "Кто является тёмным жнецом с косой?",
    options: ["Kayn", "Thresh", "Mordekaiser", "Viego"],
    correctIndex: 1, // Thresh
    image: IMAGE,
  },
  {
    id: 4,
    question: "Какой чемпион может становиться неуязвимым с помощью «Zhonya»?",
    options: ["Любой", "Только маги", "Только ассасины", "Только танки"],
    correctIndex: 0, // Любой
    image: IMAGE,
  },
  {
    id: 5,
    question: "Кто использует ярость вместо маны?",
    options: ["Tryndamere", "Garen", "Renekton", "Все перечисленные"],
    correctIndex: 3, // Все перечисленные
    image: IMAGE,
  },
  {
    id: 6,
    question: "Какой чемпион управляет временем?",
    options: ["Zilean", "Ekko", "Bard", "Ryze"],
    correctIndex: 0, // Zilean
    image: IMAGE,
  },
  {
    id: 7,
    question: "Кто из чемпионов является демоном?",
    options: ["Evelynn", "Ahri", "Elise", "Nilah"],
    correctIndex: 0, // Evelynn
    image: IMAGE,
  },
  {
    id: 8,
    question: "Какой чемпион может воровать ультимейты?",
    options: ["Sylas", "Viego", "Neeko", "LeBlanc"],
    correctIndex: 0, // Sylas
    image: IMAGE,
  },
  {
    id: 9,
    question: "Кто считается самым мобильным ассасином?",
    options: ["Zed", "Katarina", "Akali", "Talon"],
    correctIndex: 2, // Akali (да, спорно, но общепринято)
    image: IMAGE,
  },
  {
    id: 10,
    question: "Какой чемпион известен фразой «OK»?",
    options: ["Rammus", "Amumu", "Malphite", "Nasus"],
    correctIndex: 0, // Rammus
    image: IMAGE,
  },
];

export default function App() {
  const telegramUserId = 123456789; // ← TG WebApp отдаст сюда

  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  function handleAnswer(selectedIndex) {
    if (selectedIndex === questions[currentIndex].correctIndex) {
      setCorrectCount((c) => c + 1);
    }

    const next = currentIndex + 1;
    if (next < questions.length) {
      setCurrentIndex(next);
    } else {
      setFinished(true);
    }
  }

  function restartQuiz() {
    setCurrentIndex(0);
    setCorrectCount(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <Result
        total={questions.length}
        correct={correctCount}
        telegramUserId={telegramUserId}
        onRestart={restartQuiz}
      />
    );
  }

  const q = questions[currentIndex];

  return (
    <Quiz
      current={currentIndex + 1}
      total={questions.length}
      question={q.question}
      options={q.options}
      image={q.image}
      onAnswer={handleAnswer}
    />
  );
}
