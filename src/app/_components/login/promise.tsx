// components/PromiseCard.tsx

type PromiseCardProps = {
  title: string;
  items: string[];
};

export function PromiseCard({ title, items }: PromiseCardProps) {
  return (
    <div className="flex w-full flex-col justify-center rounded-lg bg-gradient-to-br from-purple-400 to-blue-500 p-8 text-left text-white">
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-3 h-2 w-2 rounded-full bg-white/50"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
