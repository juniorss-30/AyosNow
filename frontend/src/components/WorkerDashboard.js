import React from 'react';
import styles from '../styles/workerdashboard.module.css';

// Mock data for Worker
const WORKER_PROFILE = {
  name: "Jane Doe",
  role: "Master Technician - Plumbing & Tiling",
  location: "Metro Area, CA",
  status: "Available",
  skills: ["Emergency Plumbing", "Pipe Fitting", "Tile Installation", "Water Heater Repair", "Drainage Systems"],
  stats: [
    { label: "Jobs Completed", value: 312, color: styles.statBlue },
    { label: "5-Star Rating", value: 4.9, color: styles.statYellow },
    { label: "Active Requests", value: 3, color: styles.statGreen },
  ],
  jobs: [
    { id: 1, title: "Install New Shower Unit", client: "R. Evans", due: "Fri, Sep 20th", status: "Pending", color: styles.yellowBorder },
    { id: 2, title: "Fix Burst Pipe Emergency", client: "L. Smith", due: "Today, 3:00 PM", status: "Confirmed", color: styles.tealBorder },
    { id: 3, title: "Tiling Quote for Kitchen", client: "A. Chen", due: "Next Week", status: "Draft", color: styles.grayBorder },
  ]
};

// Dashboard Card Component
const DashboardCard = ({ title, children }) => (
  <div className={styles.card}>
    <h2 className={styles.cardTitle}>{title}</h2>
    {children}
  </div>
);

// Stat Pill Component
const StatPill = ({ label, value, color }) => (
  <div className={`${styles.statPill} ${color}`}>
    <p className={styles.statValue}>{value}</p>
    <p className={styles.statLabel}>{label}</p>
  </div>
);

// Job Item Component
const JobItem = ({ title, client, due, status, color }) => (
  <div className={`${styles.jobItem} ${color}`}>
    <div className={styles.jobHeader}>
      <p className={styles.jobTitle}>{title}</p>
      <span className={styles.jobStatus}>{status}</span>
    </div>
    <p className={styles.jobDetails}>Client: {client} | Due: {due}</p>
  </div>
);

const WorkerDashboard = ({ setView, setUser }) => { // Accept setView and setUser as props
  const handleLogout = () => {
    setView('LOGIN'); // Redirect to login
    setUser(null); // Clear user data
  };

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <h1 className={styles.headerTitle}>Professional Dashboard</h1>
            <p className={styles.headerSubtitle}>Manage your profile, performance, and job pipeline.</p>
          </div>
          <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <div className={styles.grid}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <DashboardCard title="My Profile">
            <div className={styles.profileHeader}>
              <div className={styles.avatar}>{WORKER_PROFILE.name.charAt(0)}</div>
              <div className={styles.profileInfo}>
                <h3 className={styles.name}>{WORKER_PROFILE.name}</h3>
                <p className={styles.role}>{WORKER_PROFILE.role}</p>
                <p className={styles.location}>{WORKER_PROFILE.location}</p>
              </div>
              <div className={styles.statusWrapper}>
                <span className={`${styles.status} ${WORKER_PROFILE.status === 'Available' ? styles.statusGreen : styles.statusRed}`}>
                  {WORKER_PROFILE.status}
                </span>
              </div>
            </div>
            <button className={styles.updateButton}>Update Profile Settings</button>
          </DashboardCard>

          <div className={styles.statsGrid}>
            {WORKER_PROFILE.stats.map((stat, idx) => <StatPill key={idx} {...stat} />)}
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <DashboardCard title="My Service Tags">
            <p className={styles.cardSubtitle}>Use these tags to match with clients:</p>
            <div className={styles.skillGrid}>
              {WORKER_PROFILE.skills.map((skill, idx) => (
                <span key={idx} className={styles.skillTag}>{skill}</span>
              ))}
            </div>
            <button className={styles.updateButton}>Update Tags</button>
          </DashboardCard>

          <DashboardCard title="Upcoming Job Pipeline">
            <div className={styles.jobsList}>
              {WORKER_PROFILE.jobs.map(job => <JobItem key={job.id} {...job} />)}
            </div>
            <button className={styles.viewAllButton}>View All Job Requests (3 New)</button>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;