type StatCardProps = {
  title: string;
  subtitle: string;
  color?: string; // Optional: defaults to purple if not provided
};

export function StatCard({ title, subtitle, color = "#8f068f" }: StatCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white px-20 py-2 text-center">
      <p className="text-3xl font-bold" style={{ color }}>{title}</p>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
}
