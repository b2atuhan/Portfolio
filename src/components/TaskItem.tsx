import React, { useState } from 'react';
import { format, isToday, isTomorrow, isPast } from 'date-fns';
import {
  Check,
  Clock,
  Calendar,
  Tag,
  Trash2,
  Edit3,
  AlertTriangle,
} from 'lucide-react';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit?: (task: Task) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPriorityBorder = (priority: string) => {
    switch (priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  };

  const formatDueDate = (date: Date) => {
    if (isToday(date)) return 'Today';
    if (isTomorrow(date)) return 'Tomorrow';
    return format(date, 'MMM d, yyyy');
  };

  const isOverdue = task.dueDate && isPast(task.dueDate) && !task.completed;

  return (
    <div
      className={`task-item card p-4 ${getPriorityBorder(task.priority)} ${
        task.completed ? 'task-completed' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start space-x-3">
        <button
          onClick={() => onToggle(task.id)}
          className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            task.completed
              ? 'bg-primary-600 border-primary-600 text-white'
              : 'border-gray-300 hover:border-primary-500'
          }`}
        >
          {task.completed && <Check className="w-3 h-3" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3
                className={`text-sm font-medium ${
                  task.completed
                    ? 'line-through text-gray-500'
                    : 'text-gray-900'
                }`}
              >
                {task.title}
              </h3>
              
              {task.description && (
                <p
                  className={`mt-1 text-sm ${
                    task.completed ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {task.description}
                </p>
              )}
            </div>

            <div className={`flex items-center space-x-2 transition-opacity duration-200 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              {onEdit && (
                <button
                  onClick={() => onEdit(task)}
                  className="p-1 text-gray-400 hover:text-primary-600 transition-colors"
                  title="Edit task"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => onDelete(task.id)}
                className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                title="Delete task"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-3">
            <span
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                task.priority
              )}`}
            >
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </span>

            {task.dueDate && (
              <div
                className={`flex items-center text-xs ${
                  isOverdue
                    ? 'text-red-600'
                    : task.completed
                    ? 'text-gray-400'
                    : 'text-gray-500'
                }`}
              >
                {isOverdue && <AlertTriangle className="w-3 h-3 mr-1" />}
                <Calendar className="w-3 h-3 mr-1" />
                {formatDueDate(task.dueDate)}
              </div>
            )}

            {task.category && (
              <div className="flex items-center text-xs text-gray-500">
                <Tag className="w-3 h-3 mr-1" />
                {task.category}
              </div>
            )}

            <div className="flex items-center text-xs text-gray-400">
              <Clock className="w-3 h-3 mr-1" />
              {format(task.createdAt, 'MMM d')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};