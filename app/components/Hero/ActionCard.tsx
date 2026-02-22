import Link from 'next/link';
import Image from 'next/image';

interface ActionCardProps {
  link: string;
  title: string;
  description: string;
  image: string;
}

export default function ActionCard({ link, title, description, image }: ActionCardProps) {
  return (
    <Link href={link} className="group block h-full">
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-900 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">

        <div className="relative h-80 w-full overflow-hidden">
          <Image
            fill
            src={image}
            alt={title}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 backdrop-blur-sm bg-white/5 border-t border-white/10 transition-colors duration-300 group-hover:bg-white/10">
          <h2 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-blue-400 transition-colors">
            {title}
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-2 font-light">
            {description}
          </p>

          <div className="mt-4 flex items-center text-blue-400 text-xs font-bold uppercase tracking-widest opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

      </div>
    </Link>
  );
}
