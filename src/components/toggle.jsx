import { Sun, Moon, Menu, X } from 'lucide-react';

function Toggle({ isCheck, onChange }) {
    return (
        <button
            onClick={onChange}
            className="p-2 rounded-lg
                       text-gray-600 dark:text-gray-300
                       hover:bg-gray-200 dark:hover:bg-gray-700
                       transition-all duration-300"
            aria-label="Toggle theme"
        >
            {isCheck ? (
                <Moon size={20} className="text-pink-400" />
            ) : (
                <Sun size={20} className="text-yellow-500" />
            )}
        </button>
    );
}

export default Toggle;