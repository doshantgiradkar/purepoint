import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

const FloatingButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/report")}
      className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
    >
      <Plus className="w-6 h-6" />
    </button>
  );
};

export default FloatingButton;