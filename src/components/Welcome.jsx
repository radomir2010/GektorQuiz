export default function Welcome({ onStart }) {
  const text =
    "Приветствую тебя мой друг! Надеюсь, что начало года тебя не разочаровало, ты доел все салаты и готов к рабочим будням. " +
    "Но чтобы тебе не было так грустно начинать работу, ваши старые покорные слуги подготовил для вас некоторое количество вопросов " +
    "за правильный ответ на которые можно получить приятные призы.\n\n" +
    "Конечно пока что ты не знаешь кто Мы, да это и не важно, главное что Мы, знаем кто Ты!\n\n" +
    "Ну что, начнём твою проверку в области Лора и знаний по нашей любимой игре. " +
    "Ну и как всегда постараемся через вопросы рассказать тебе что-то полезное или занимательно по вселенной Лиги Легенд.";

  return (
    <div className="min-h-screen lol-bg flex justify-center px-4 py-6">
      <div className="w-full max-w-md flex flex-col gap-6 text-center">
        <h1 className="lol-title text-3xl">ДОБРО ПОЖАЛОВАТЬ</h1>

        <div className="lol-card rounded-xl p-6">
          <p className="text-base leading-relaxed whitespace-pre-line opacity-90">
            {text}
          </p>
        </div>

        <button
          onClick={onStart}
          className="lol-button rounded-lg px-6 py-3 uppercase tracking-wider"
        >
          Начать
        </button>
      </div>
    </div>
  );
}
