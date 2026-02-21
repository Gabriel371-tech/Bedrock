import { useEffect, useState } from "react";
import ProfileModal from "../components/ProfileModal";
import { getMe } from "../services/userService";
import { SidebarSimple } from "../components/sidebar-simple";

export default function DashBoardScreen() {
  const [showModal, setShowModal] = useState(false);

  const [stats, setStats] = useState({
    totalStudents: 0,
    activeCourses: 0,
    graduationRate: 0,
  });

  // 🔎 Verifica perfil
useEffect(() => {
  async function loadUser() {
    try {
      const user = await getMe();
      if (!user.role) setShowModal(true);
    } catch {
      // para teste, mostra modal se houver erro
      setShowModal(true);
    }
  }

  loadUser();
}, []);

  // 📊 Buscar estatísticas (sem token)
  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch("http://localhost:4000/api/dashboard/stats");
        if (!res.ok) throw new Error("Erro ao buscar stats");

        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      }
    }

    loadStats();
  }, []);

  return (
    <div className="flex h-screen">
      <SidebarSimple />

      {/* MODAL */}
      {showModal && <ProfileModal onClose={() => setShowModal(false)} />}

      <div className="flex-grow p-8 overflow-y-auto bg-base-100">
        <h1 className="text-3xl font-semibold text-base-content mb-8">
          Dashboard Overview
        </h1>

        {/* Stats Section */}
        <div className="stats stats-vertical lg:stats-horizontal shadow mb-8">
          <div className="stat">
            <div className="stat-title">Total Students</div>
            <div className="stat-value text-primary">{stats.totalStudents}</div>
            <div className="stat-desc">↗︎ 20% increase this month</div>
          </div>

          <div className="stat">
            <div className="stat-title">Active Courses</div>
            <div className="stat-value text-secondary">{stats.activeCourses}</div>
            <div className="stat-desc">↗︎ 5 new courses added</div>
          </div>

          <div className="stat">
            <div className="stat-title">Graduation Rate</div>
            <div className="stat-value text-accent">{stats.graduationRate}%</div>
            <div className="stat-desc">↗︎ 2% from last year</div>
          </div>
        </div>
      </div>
    </div>
  );
}