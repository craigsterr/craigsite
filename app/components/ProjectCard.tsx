import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  image,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center max-w-xs">
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
  );
}
