import { useState, useEffect } from "react";
import { SidebarSimple } from "../components/sidebar-simple";

interface Discipline {
  id: number;
  name: string;
  code: string;
  professor: string;
}

export default function DisciplinesScreen() {
  const [disciplines, setDisciplines] = useState<Discipline[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDiscipline, setEditingDiscipline] = useState<Discipline | null>(null);
  const [formData, setFormData] = useState({ name: '', code: '', professor: '' });

  useEffect(() => {
    // Simulação de chamada para o backend Express para disciplinas
    fetch('/api/disciplines')
      .then(response => response.json())
      .then(data => setDisciplines(data))
      .catch(error => console.error('Erro ao buscar disciplinas:', error));
  }, []);

  const filteredDisciplines = disciplines.filter(discipline =>
    discipline.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    discipline.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    discipline.professor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddDiscipline = () => {
    setEditingDiscipline(null);
    setFormData({ name: '', code: '', professor: '' });
    setIsModalOpen(true);
  };

  const handleEditDiscipline = (discipline: Discipline) => {
    setEditingDiscipline(discipline);
    setFormData({ name: discipline.name, code: discipline.code, professor: discipline.professor });
    setIsModalOpen(true);
  };

  const handleDeleteDiscipline = async (id: number) => {
    if (confirm('Tem certeza que deseja excluir esta disciplina?')) {
      try {
        await fetch(`/api/disciplines/${id}`, { method: 'DELETE' });
        setDisciplines(disciplines.filter(d => d.id !== id));
      } catch (error) {
        console.error('Erro ao excluir disciplina:', error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingDiscipline ? 'PUT' : 'POST';
      const url = editingDiscipline ? `/api/disciplines/${editingDiscipline.id}` : '/api/disciplines';
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const newDiscipline = await response.json();
      if (editingDiscipline) {
        setDisciplines(disciplines.map(d => d.id === editingDiscipline.id ? newDiscipline : d));
      } else {
        setDisciplines([...disciplines, newDiscipline]);
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error('Erro ao salvar disciplina:', error);
    }
  };

  return (
    <div className="flex h-screen">
      
      <SidebarSimple>
      </SidebarSimple>

      <div className="flex-grow p-8 overflow-y-auto bg-base-100">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-base-content">Disciplinas</h1>
          <button className="btn btn-primary btn-lg" onClick={handleAddDiscipline}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
            Adicionar Disciplina
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar disciplinas..."
            className="input input-bordered input-lg w-full max-w-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDisciplines.map(discipline => (
            <div key={discipline.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <figure className="px-6 pt-6">
                <img
                  src={`https://picsum.photos/200/150?random=${discipline.id}`}
                  alt={`Imagem da disciplina ${discipline.name}`}
                  className="rounded-xl mask mask-squircle"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-base-content">{discipline.name}</h2>
                <p className="text-base-content opacity-70">Código: {discipline.code}</p>
                <p className="text-base-content opacity-70">Professor: {discipline.professor}</p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-outline btn-sm" onClick={() => handleEditDiscipline(discipline)}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                    Editar
                  </button>
                  <button className="btn btn-outline btn-error btn-sm" onClick={() => handleDeleteDiscipline(discipline.id)}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Add/Edit Discipline */}
        <input type="checkbox" id="discipline-modal" className="modal-toggle" checked={isModalOpen} onChange={() => setIsModalOpen(!isModalOpen)} />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{editingDiscipline ? 'Editar Disciplina' : 'Adicionar Nova Disciplina'}</h3>
            <form onSubmit={handleSubmit} className="py-4">
              <div className="form-control mb-4">
                <label htmlFor="discipline-name" className="label">
                  <span className="label-text">Nome</span>
                </label>
                <input
                  id="discipline-name"
                  type="text"
                  placeholder="Nome da Disciplina"
                  className="input input-bordered"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label htmlFor="discipline-code" className="label">
                  <span className="label-text">Código</span>
                </label>
                <input
                  id="discipline-code"
                  type="text"
                  placeholder="Código da Disciplina"
                  className="input input-bordered"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label htmlFor="discipline-professor" className="label">
                  <span className="label-text">Professor</span>
                </label>
                <input
                  id="discipline-professor"
                  type="text"
                  placeholder="Nome do Professor"
                  className="input input-bordered"
                  value={formData.professor}
                  onChange={(e) => setFormData({ ...formData, professor: e.target.value })}
                  required
                />
              </div>
              <div className="modal-action">
                <label htmlFor="discipline-modal" className="btn">Cancelar</label>
                <button type="submit" className="btn btn-primary">{editingDiscipline ? 'Atualizar' : 'Adicionar'}</button>
              </div>
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="discipline-modal">a</label>
        </div>
      </div>

    </div>
  );
}