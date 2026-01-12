// components/Result.jsx
export default function Result({ total, correct, telegramUserId, onRestart }) {
  const safeTotal = Math.max(1, total); // чтобы не делить на 0
  const percent = Math.round((correct / safeTotal) * 100);

  return (
    <div className="min-h-screen lol-bg flex justify-center px-4 py-6">
      <div className="w-full max-w-md flex flex-col gap-8 text-center">
        {/* Title */}
        <h1 className="lol-title text-3xl">РЕЗУЛЬТАТ</h1>

        {/* Card */}
        <div className="lol-card rounded-xl p-6 flex flex-col gap-4">
          <p className="text-sm opacity-60">Telegram ID</p>
          <p className="text-sm tracking-widest">{telegramUserId}</p>

          <div className="h-px bg-[var(--border-gold)] opacity-30 my-2" />

          <p className="text-lg">
            Правильных ответов:
            <span className="lol-score ml-2">
              {correct} / {total}
            </span>
          </p>

          <p className="text-4xl lol-score font-bold">{percent}%</p>
        </div>

        {/* Action */}
        {percent === 100 ? (
          <a
            href="https://t.me/your_hidden_chat"
            target="_blank"
            rel="noopener noreferrer"
            className="lol-button rounded-lg px-6 py-3 uppercase tracking-wider"
          >
            🎉 Перейти в скрытый чат
          </a>
        ) : (
          <button
            onClick={onRestart}
            className="lol-button rounded-lg px-6 py-3 uppercase tracking-wider"
          >
            Пройти заново
          </button>
        )}
      </div>
    </div>
  );
}
