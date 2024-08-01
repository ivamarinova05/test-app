import styles from './MoreInfoSection.module.css'

interface MoreInfoSectionProps {
    projects: number;
    commits: number;
    followers: number;
}

export const MoreInfoSection = ({projects, commits, followers}: MoreInfoSectionProps) => {
    return (
        <div className={styles.moreInfo}>
            <div className={styles.section}>
                <span>Projects</span> 
                <span className={styles.number}>{projects}</span>
            </div>
            <div className={styles.section}>
                <span>Commits</span> 
                <span className={styles.number}>{commits}</span>
            </div>
            <div className={styles.section}>
                <span>Followers</span> 
                <span className={styles.number}>{followers}</span>
            </div>
        </div>
    );
}