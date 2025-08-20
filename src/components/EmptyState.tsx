import React from 'react';
import { CheckCircle, Plus } from 'lucide-react';

interface EmptyStateProps {
  type: 'no-tasks' | 'no-results' | 'all-completed';
  onAddTask?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ type, onAddTask }) => {
  const getContent = () => {
    switch (type) {
      case 'no-tasks':
        return {
          icon: Plus,
          title: 'No tasks yet',
          description: 'Create your first task to get started with organizing your work.',
          actionText: 'Add your first task',
        };
      case 'no-results':
        return {
          icon: CheckCircle,
          title: 'No tasks found',
          description: 'Try adjusting your search or filter criteria.',
          actionText: null,
        };
      case 'all-completed':
        return {
          icon: CheckCircle,
          title: 'All done! 🎉',
          description: 'You\'ve completed all your tasks. Great job!',
          actionText: 'Add more tasks',
        };
      default:
        return {
          icon: CheckCircle,
          title: 'Nothing here',
          description: 'No tasks to display.',
          actionText: null,
        };
    }
  };

  const content = getContent();
  const Icon = content.icon;

  return (
    <div className="text-center py-12">
      <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        {content.title}
      </h3>
      <p className="text-gray-600 mb-6 max-w-sm mx-auto">
        {content.description}
      </p>
      {content.actionText && onAddTask && (
        <button
          onClick={onAddTask}
          className="btn-primary"
        >
          <Plus className="w-4 h-4 mr-2" />
          {content.actionText}
        </button>
      )}
    </div>
  );
};