import { X } from "lucide-react";
import { useState } from "react";

export const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-primary-foreground px-4 py-3 relative">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 text-center">
          <p className="text-sm md:text-base font-medium">
            🐝 2026 Bee School Registration Now Open! Sign up today for our comprehensive beekeeping course.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-primary-foreground hover:opacity-80 transition-opacity"
          aria-label="Close announcement"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};
