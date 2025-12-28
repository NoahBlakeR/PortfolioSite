import SectionHead from '../SectionHead/SectionHead';
import './Archive.css';

const Archive = () => (
  <section id="project-archive" className="section archive section-white reveal" style={{ '--delay': '0ms' }}>
    <div className="container">
      <SectionHead
        eyebrow="Additional work"
        title="More projects beyond the spotlight."
        lead="Branding exploration, web experiments, and smaller builds."
      />
      <div className="table-wrap">
        <table className="archive-table">
          <thead>
            <tr>
              <th scope="col">Project</th>
              <th scope="col">Focus</th>
              <th scope="col">Role</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Branding Project - Studio Myo</td>
              <td>Visual identity + 3D assets</td>
              <td>Brand + UX Design</td>
              <td>2025</td>
            </tr>
            <tr>
              <td>Portfolio Website Development</td>
              <td>React + 3D web experience</td>
              <td>UX + Front-End</td>
              <td>2025</td>
            </tr>
            <tr>
              <td>Todo List Application</td>
              <td>React app with API + state</td>
              <td>Front-End</td>
              <td>2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default Archive;
