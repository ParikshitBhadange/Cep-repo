const Badges = ({ badges }) => {
  if (!badges || badges.length === 0) return null;

  const getBadgeStyle = (badge) => {
    switch (badge) {
      case 'Open to Work':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800';
      case 'Hiring':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'Pro':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'Premium':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      case 'Verified':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 border-gray-200 dark:border-gray-800';
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {badges.map((badge, index) => (
        <span
          key={index}
          className={`px-3 py-1 text-xs font-medium rounded-full border ${getBadgeStyle(badge)}`}
        >
          {badge}
        </span>
      ))}
    </div>
  );
};

export default Badges;