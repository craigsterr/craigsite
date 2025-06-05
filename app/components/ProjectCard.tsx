import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 rounded-lg shadow-md flex flex-col items-center max-w-xs w-80 h-100 transition-transform duration-300 hover:scale-105 overflow-hidden relative"
    >
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-30"
          sizes="320px"
        />
      </div>
      {/* Foreground content */}
      <div className="relative z-10 p-4 flex flex-col items-center w-full">
        <Image
          src={image}
          alt={title}
          width={200}
          height={120}
          className="rounded mb-2"
        />
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </a>
  );
}
