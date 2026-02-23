"use client";

export type FilterType = 'profile' | 'industry' | 'service';

interface ServiceFiltersProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { id: FilterType; label: string; count: string }[] = [
  { id: 'profile', label: 'By Profile', count: '3' },
  { id: 'industry', label: 'By Industry', count: '5' },
  { id: 'service', label: 'By Service', count: '10' },
];

export default function ServiceFilters({ activeFilter, onFilterChange }: ServiceFiltersProps) {
  return (
    <div className="flex items-center gap-2 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
            activeFilter === filter.id
              ? 'bg-accent text-white shadow-[0_0_20px_-4px_rgba(59,130,246,0.6)]'
              : 'bg-white/5 text-foreground/60 border border-white/10'
          }`}
        >
          {filter.label}
          <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
            activeFilter === filter.id
              ? 'bg-white/20 text-white'
              : 'bg-white/10 text-foreground/40'
          }`}>
            {filter.count}
          </span>
        </button>
      ))}
    </div>
  );
}
