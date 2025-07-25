import { Loader2 } from "lucide-react";


// Loading ui component
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 p-6">
      <Loader2 className="animate-spin text-blue-600 w-10 h-10" aria-label="Loading spinner" />
      <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">Loading...</p>
    </div>
  );
};

export default Loading;
