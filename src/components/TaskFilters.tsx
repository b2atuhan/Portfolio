import React from 'react';
import { Filter, Search, X } from 'lucide-react';

export type FilterType = 'all' | 'pending' | 'completed' | 'overdue';
export type SortType = 'created' | 'dueDate' | 'priority' | 'title';

interface TaskFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  sortBy: SortType;
  onSortChange: (sort: SortType) => void;
  onClearCompleted: () => void;
  hasCompletedTasks: boolean;
}

export const TaskFilters: React.FC<TaskFiltersProps> = ({
  searchTerm,
  onSearchChange,
  activeFilter,
  onFilterChange,
  sortBy,
  onSortChange,
  onClearCompleted,
  hasCompletedTasks,
}) => {
  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All Tasks' },
    { key: 'pending', label: 'Pending' },
    { key: 'completed', label: 'Completed' },
    { key: 'overdue', label: 'Overdue' },
  ];

  const sortOptions: { key: SortType; label: string }[] = [
    { key: 'created', label: 'Date Created' },
    { key: 'dueDate', label: 'Due Date' },
    { key: 'priority', label: 'Priority' },
    { key: 'title', label: 'Title' },
  ];

  return (
    <div className="card p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="input pl-10 pr-10 w-full sm:w-64"
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => onFilterChange(filter.key)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  activeFilter === filter.key
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Sort */}
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortType)}
              className="input text-sm py-1.5"
            >
              {sortOptions.map((option) => (
                <option key={option.key} value={option.key}>
                  Sort by {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Completed */}
          {hasCompletedTasks && (
            <button
              onClick={onClearCompleted}
              className="btn-ghost text-sm"
            >
              Clear Completed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};