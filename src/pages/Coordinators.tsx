import Hero from '../components/Hero';
import '../styles/pages.css';

const getInitials = (name: string) => name.split(' ').slice(0, 2).map(n => n[0]).join('');

const COORDINATORS = {
  students: [
    { name: 'Adithya Sajosh', contact: '9633387911', role: 'Student Coordinator', department: 'Computer Science and Engineering', year: 'First Year' },
    { name: 'Hidhesh R M', contact: '9445967927', role: 'Student Coordinator', department: 'Computer Science and Engineering', year: 'First Year' },
    { name: 'Mahadevan V S', contact: '9994256496', role: 'Student Coordinator', department: 'Computer Science and Engineering', year: 'First Year' },
    { name: 'Srinivash M', contact: '7305845587', role: 'Student Coordinator', department: 'Artificial Intelligence and Data Science', year: 'First Year' },
    { name: 'Kaviyarasan R', contact: '9442583920', role: 'Student Coordinator', department: 'Artificial Intelligence and Data Science', year: 'First Year' },
    { name: 'Devendran B', contact: '9629442458', role: 'Student Coordinator', department: 'Artificial Intelligence and Data Science', year: 'First Year' },
    { name: 'Govarshini B', contact: '', role: 'Student Coordinator', department: 'Computer Science and Engineering', year: 'First Year' },
    { name: 'Srinithi G D', contact: '', role: 'Student Coordinator', department: 'Artificial Intelligence and Data Science', year: 'First Year' }
  ],
  faculty: [
    { name: 'Arun Kumar G', contact: '9994047023', role: 'Staff Coordinator' },
    { name: 'Preethiya S', contact: '9751528028', role: 'Staff Coordinator' },
    { name: 'Gunasekaran V', contact: '8531048010', role: 'Staff Coordinator' }
  ]
};

export default function Coordinators() {
  return (
    <div className="page-coordinators">
      <Hero 
        title="Meet The Team"
        subtitle="The students and faculty who make PYRONIX 2K26 possible."
        ctaText="Our Team"
        ctaLink="/coordinators"
        overlayTitle="Meet The Team"
        overlaySubtitle="The students and faculty who make PYRONIX 2K26 possible."
      />

      <main className="section about-section">
        <div className="container">
          <h2 className="section-title">Coordinators</h2>
          <p className="section-subtitle">Meet the team organizing PYRONIX 2K26</p>

          <div className="coordinator-section">
            <h3 className="section-subtitle">Student Coordinators</h3>
            <div className="coordinator-grid student-grid">
              {COORDINATORS.students.map((person, index) => (
                <div key={person.name} className={`coord-card coord-accent-${(index % 3) + 1}`}>
                  <div className="coord-avatar">
                    <span>{getInitials(person.name)}</span>
                  </div>
                  <div className="coord-info">
                    <div className="coord-name">{person.name}</div>
                    <div className="coord-role">{person.role}</div>
                    <div className="coord-details">
                      <span className="badge">{person.department}</span>
                      <span className="badge">{person.year}</span>
                    </div>
                    {person.contact && (
                      <a href={`tel:${person.contact}`} className="coord-contact">📞 {person.contact}</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="coordinator-section">
            <h3 className="section-subtitle">Faculty Coordinators</h3>
            <div className="coordinator-grid faculty-grid">
              {COORDINATORS.faculty.map((person, index) => (
                <div key={person.name} className={`coord-card staff coord-accent-${(index % 3) + 1}`}>
                  <div className="coord-avatar">
                    <span>{getInitials(person.name)}</span>
                  </div>
                  <div className="coord-info">
                    <div className="coord-name">{person.name}</div>
                    <div className="coord-role">{person.role}</div>
                    <div className="coord-details">
                      <span className="badge">Faculty</span>
                    </div>
                    <a href={`tel:${person.contact}`} className="coord-contact">📞 {person.contact}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
