export default function Quiz({
  current,
  total,
  question,
  image,
  options,
  onAnswer,
}) {
  return (
    <div className="min-h-screen lol-bg flex justify-center px-4 py-6">
      <div className="w-full max-w-md flex flex-col gap-6">
        <div className="text-center">
          <span className="lol-badge">
            Вопрос {current} / {total}
          </span>
        </div>

        <div className="lol-card rounded-xl p-5 text-center">
          <h2 className="lol-question text-xl leading-snug whitespace-pre-line">
            {question}
          </h2>
        </div>

        {image && (
          <div className="lol-card rounded-xl overflow-hidden aspect-video">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        )}

        <div className="grid gap-3">
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => onAnswer(idx)}
              className="lol-button rounded-lg px-4 py-3 text-sm uppercase tracking-wide"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
