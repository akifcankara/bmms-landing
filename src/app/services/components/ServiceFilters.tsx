"use client";



export type FilterType = 'profile' | 'industry' | 'service';

interface ServiceFiltersProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export default function ServiceFilters({ activeFilter, onFilterChange }: ServiceFiltersProps) {
  const filters: { id: FilterType; label: string }[] = [
    { id: 'profile', label: 'By Profile' },
    { id: 'industry', label: 'By Industry' },
    { id: 'service', label: 'By Service' },
  ];

  return (
    <div className="flex items-center justify-center gap-3 bg-card/80 backdrop-blur-sm border border-border p-2 rounded-xl mb-12 reveal">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
            activeFilter === filter.id
              ? 'bg-accent text-accent-foreground shadow-lg'
              : 'text-muted-foreground hover:text-foreground hover:bg-card'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}