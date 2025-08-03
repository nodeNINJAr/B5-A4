import React from 'react';
import {
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle,
  X
} from 'lucide-react';

interface CustomAlertProps {
  message: string;
  type?: 'info' | 'success' | 'error' | 'warning';
  onClose?: () => void;
}

const iconMap = {
  info: <Info className="w-6 h-6 text-blue-500" />,
  success: <CheckCircle className="w-6 h-6 text-green-500" />,
  warning: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
  error: <XCircle className="w-6 h-6 text-red-500" />,
};

const alertClassMap = {
  info: 'alert-info',
  success: 'alert-success',
  warning: 'alert-warning',
  error: 'alert-error',
};

const Alert: React.FC<CustomAlertProps> = ({ message, type = 'info', onClose }) => {
  return (
    <div role="alert" className={`alert ${alertClassMap[type]} shadow-lg fixed top-5 right-5 z-50 w-fit`}>
      {iconMap[type]}
      <span>{message}</span>
      {onClose && (
        <button onClick={onClose} className="ml-2 cursor-pointer">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Alert;
