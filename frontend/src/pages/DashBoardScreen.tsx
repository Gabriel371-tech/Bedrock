import { useState, useEffect } from "react";
import { SidebarSimple } from "../components/sidebar-simple";

export default function DashBoardScreen() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeCourses: 0,
    graduationRate: 0,
  });

  useEffect(() => {
    // Simulação de chamada para o backend Express
    // Substitua pela URL real da sua API
    fetch('/api/dashboard/stats')
      .then(response => response.json())
      .then(data => setStats(data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <div className="flex h-screen">
      
      <SidebarSimple>
      </SidebarSimple>

      <div className="flex-grow p-8 overflow-y-auto bg-base-100">
        <h1 className="text-3xl font-semibold text-base-content mb-8">Dashboard Overview</h1>
        
        {/* Stats Section */}
        <div className="stats stats-vertical lg:stats-horizontal shadow mb-8">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg className="inline-block w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="stat-title">Total Students</div>
            <div className="stat-value text-primary">{stats.totalStudents}</div>
            <div className="stat-desc">↗︎ 20% increase this month</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg className="inline-block w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <div className="stat-title">Active Courses</div>
            <div className="stat-value text-secondary">{stats.activeCourses}</div>
            <div className="stat-desc">↗︎ 5 new courses added</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-accent">
              <svg className="inline-block w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="stat-title">Graduation Rate</div>
            <div className="stat-value text-accent">{stats.graduationRate}%</div>
            <div className="stat-desc">↗︎ 2% from last year</div>
          </div>
        </div>
        
        {/* Recent Activities Table */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-base-content">Recent Activities</h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Activity</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>New student enrollment</td>
                    <td>2023-10-01</td>
                    <td><span className="badge badge-success">Completed</span></td>
                  </tr>
                  <tr>
                    <td>Course update: Mathematics 101</td>
                    <td>2023-09-28</td>
                    <td><span className="badge badge-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <td>Professor meeting scheduled</td>
                    <td>2023-09-25</td>
                    <td><span className="badge badge-info">Scheduled</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-base-content">Add New Student</h3>
              <p className="text-base-content">Register a new student in the system.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Add Student</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-base-content">Create Course</h3>
              <p className="text-base-content">Set up a new academic course.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">Create Course</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-base-content">View Reports</h3>
              <p className="text-base-content">Access academic performance reports.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">View Reports</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
