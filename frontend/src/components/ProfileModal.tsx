// components/ProfileModal.tsx
import { useState } from "react";
import { completeProfile } from "../services/userService";

interface Props {
  readonly onClose: () => void;
}

export default function ProfileModal({ onClose }: Props) {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!role) {
      alert("Selecione um perfil");
      return;
    }

    try {
      setLoading(true);
      await completeProfile(role);
      alert(`Perfil atualizado para: ${role}`); // mensagem temporária
      onClose();
    } catch (err: any) {
      alert(err.message || "Erro ao atualizar perfil");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Complete seu perfil
        </h2>

        <div className="space-y-3">
          {["professor", "aluno", "empresa"].map((item) => (
            <button
              key={item}
              onClick={() => setRole(item)}
              className={`btn w-full ${
                role === item ? "btn-primary" : "btn-outline"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        <button
          onClick={handleSave}
          className="btn btn-primary w-full mt-6"
          disabled={loading}
        >
          {loading ? "Salvando..." : "Confirmar"}
        </button>
      </div>
    </div>
  );
}