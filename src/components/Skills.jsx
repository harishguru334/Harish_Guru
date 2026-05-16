import styles from './Skills.module.css';

const skills = [
  { icon: '🌐', name: 'HTML' },
  { icon: '🎨', name: 'CSS' },
  { icon: '⚡', name: 'JavaScript' },
  { icon: '⚛️', name: 'React' },
  { icon: '🟩', name: 'Node.js' },
  { icon: '🚂', name: 'Express.js' },
  { icon: '🍃', name: 'MongoDB' },
  { icon: '🔧', name: 'Git' },
  { icon: '🚀', name: 'Vercel' },
  { icon: '🔗', name: 'REST API' },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.label}>02 &nbsp; Skills</div>
      <h2 className={styles.title}>Technologies I work with</h2>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.chip}>
            <span className={styles.icon}>{skill.icon}</span>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}
