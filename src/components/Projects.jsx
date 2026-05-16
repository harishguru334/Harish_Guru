import styles from './Projects.module.css';

const projects = [
  {
    icon: '🏨',
    name: 'StayBest',
    desc: 'A full-featured hotel management system with room booking, user authentication, and admin dashboard built with the MERN stack.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://staybest.vercel.app/login',
  },
  {
    icon: '🛍️',
    name: 'BuyBest',
    desc: 'A modern e-commerce web application with product listings, cart functionality, and a clean responsive UI for seamless shopping.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://buybest.vercel.app/',
  },
  {
    icon: '🌆',
    name: 'Dubai Bazar',
    desc: 'A professional business landing website showcasing products and services with an elegant layout and smooth user experience.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    link: 'https://dubai-bazar.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.label}>03 &nbsp; Projects</div>
      <h2 className={styles.title}>What I've built</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.name} className={styles.card}>
            <span className={styles.icon}>{project.icon}</span>
            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.desc}>{project.desc}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <a
              href={project.link}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
