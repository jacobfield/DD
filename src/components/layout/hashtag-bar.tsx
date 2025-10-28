export function HashtagBar() {
  const hashtags = [
    "#DerbyshireDucks",
    "#JoinTheFlock",
    "#QuackAttack",
    "#DuckDynasty",
    "#DucksFlyTogether",
    "#FlagIsSwag",
    "#DerbyshireSports",
    "#DucksFootball",
    "#OFLChampions",
    "#ChampionMindset",
  ];

  return (
    <div className="bg-ducks-purple border-y-2 border-ducks-gold overflow-hidden py-4 shadow-md relative">
      <div className="relative flex whitespace-nowrap">
        <div className="flex animate-scroll">
          {hashtags.map((tag, index) => (
            <span
              key={index}
              className="mx-8 text-white font-bold text-xl inline-block font-display tracking-wider hover:text-ducks-gold transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex animate-scroll" aria-hidden="true">
          {hashtags.map((tag, index) => (
            <span
              key={`duplicate-${index}`}
              className="mx-8 text-white font-bold text-xl inline-block font-display tracking-wider hover:text-ducks-gold transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
