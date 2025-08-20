import React from 'react';
import { CheckCircle, Clock, AlertTriangle, ListTodo } from 'lucide-react';

interface TaskStatsProps {
  stats: {
    total: number;
    completed: number;
    pending: number;
    overdue: number;
  };
}

export const TaskStats: React.FC<TaskStatsProps> = ({ stats }) => {
  const statItems = [
    {
      label: 'Total Tasks',
      value: stats.total,
      icon: ListTodo,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Completed',
      value: stats.completed,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      label: 'Pending',
      value: stats.pending,
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      label: 'Overdue',
      value: stats.overdue,
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {statItems.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="card p-4">
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${item.bgColor} mr-3`}>
                <Icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">
                  {item.value}
                </p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};