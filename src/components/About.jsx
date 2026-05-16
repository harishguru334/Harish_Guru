import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.label}>01 &nbsp; About me</div>
      <h2 className={styles.title}>Who I am</h2>
      <div className={styles.grid}>
        <div className={styles.text}>
          <p>
            Hi! I'm <span className={styles.highlight}>Harish Guru</span>, a MERN Stack
            Developer based in India. I've recently completed my learning journey in
            full-stack web development and built several real-world projects along the way.
          </p>
          <p>
            I enjoy creating web applications that solve real problems — from hotel
            management platforms to e-commerce stores. I'm comfortable working across
            the <span className={styles.highlight}>MongoDB, Express, React, and Node.js</span> stack
            and always looking to write cleaner, better code.
          </p>
          <p>
            Right now, I'm actively looking for an{' '}
            <span className={styles.highlight}>internship opportunity</span> where I can
            contribute, grow, and learn from experienced developers.
          </p>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            Open to Internship Opportunities
          </div>
        </div>

        <div className={styles.facts}>
          <p className={styles.factsLabel}>Quick Facts</p>
          {[
            'MERN Stack Development',
            '3 Deployed Projects',
            'REST API Development',
            'Git & Version Control',
            'Deployed on Vercel',
            'Based in India 🇮🇳',
          ].map((fact) => (
            <div key={fact} className={styles.factItem}>
              <span className={styles.arrow}>→</span>
              <span>{fact}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
