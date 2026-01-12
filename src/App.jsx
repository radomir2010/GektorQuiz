import { useMemo, useState } from "react";
import Quiz from "./components/Quiz.jsx";
import Result from "./components/Result.jsx";
import Welcome from "./components/Welcome.jsx";
import { getQuestionById } from "./data/questions.js";

export default function App() {
  const telegramUserId = 123456789; // потом подставишь из TG WebApp

  const [started, setStarted] = useState(false);
  const [currentId, setCurrentId] = useState("q1_planet");
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = getQuestionById(currentId);

  // Считаем только вопросы со знанием (где есть correctIndex = number)
  // Тут это: q1_planet + один из веточных (q_tank/q_support/q_mage/q_phys) = 2
  const totalScored = 2;

  const step = useMemo(() => {
    // Для UI-шагов показываем 3 этапа:
    // 1) планета, 2) выбор роли, 3) веточный вопрос
    if (currentId === "q1_planet") return 1;
    if (currentId === "q2_role") return 2;
    return 3;
  }, [currentId]);

  const totalSteps = 3;

  function handleStart() {
    setStarted(true);
  }

  function handleAnswer(selectedIndex) {
    if (!q) return;

    // 1) Если это обычный вопрос — проверяем правильность
    if (typeof q.correctIndex === "number") {
      if (selectedIndex === q.correctIndex) {
        setCorrectCount((c) => c + 1);
      }
    }

    // 2) Определяем следующий вопрос
    let nextId = null;

    // ветвление
    if (q.id === "q2_role") {
      nextId = q.nextByAnswer?.[selectedIndex] ?? null;
    } else {
      nextId = q.nextId ?? null;
    }

    // 3) Конец или переход
    if (!nextId) {
      setFinished(true);
    } else {
      setCurrentId(nextId);
    }
  }

  function restartQuiz() {
    setStarted(false);
    setCurrentId("q1_planet");
    setCorrectCount(0);
    setFinished(false);
  }

  if (!started) {
    return <Welcome onStart={handleStart} />;
  }

  if (finished) {
    return (
      <Result
        total={totalScored}
        correct={correctCount}
        telegramUserId={telegramUserId}
        onRestart={restartQuiz}
      />
    );
  }

  return (
    <Quiz
      current={step}
      total={totalSteps}
      question={q?.question ?? ""}
      options={q?.options ?? []}
      image={q?.image}
      onAnswer={handleAnswer}
    />
  );
}
