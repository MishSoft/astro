import ActionCard from "./ActionCard"

const cardData = [
  {
    id: 1,
    title: 'Daily Horoscope',
    description: "Your individual topics for each day! With the Love Horoscope and the Celestial Events!",
    image: "/hero-image/card-images/daily-horoscope.png",
    link: "/daily-horoscope"
  },
  {
    id: 2,
    title: 'Free Horoscope',
    description: "Find all the free horoscopes Personality, Forecast, Love and Relationship and much more.",
    image: "/hero-image/card-images/free-horoscope.png",
    link: "/free-horoscope"
  },
  {
    id: 3,
    title: 'Charts and Calculations',
    description: "For Astrologers: Chart Drawings, Ephemeris, Data Collections and more.",
    image: "/hero-image/card-images/charts.png",
    link: "/charts-and-calculations"
  },
  {
    id: 4,
    title: 'The Best Time',
    description: "Find the best moment for your project - with the electional horoscope!",
    image: "/hero-image/card-images/best-time.png",
    link: "/the-best-time"
  },
]

export default function Hero() {
  return (
    <section className="relative w-full py-40 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617]">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col gap-4 max-w-4xl text-white text-center px-6">
        <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
          Discover Your Destiny
        </span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] bg-clip-text text-transparent bg-linear-to-b from-white to-slate-400">
          The Art of Astrology
        </h1>
        <p className="mt-4 text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Welcome to <span className="text-white font-medium">Astrodienst</span> and the world's best horoscopes. Explore the celestial movements tailored just for you.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto mt-20 px-6">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {cardData.map((card) => (
            <div key={card.id} className="h-full transform transition-all duration-300 hover:-translate-y-2">
              <ActionCard
                link={card.link}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 w-32 h-1 bg-linear-to-r from-transparent via-blue-500/50 to-transparent rounded-full" />

    </section>
  )
}
