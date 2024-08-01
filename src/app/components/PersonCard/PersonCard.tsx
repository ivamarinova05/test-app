import { Avatar, Card, Rating } from "@mui/material"
import styles from './PersonCard.module.css'
import { tableRow } from "@/src/types/types";
import { MoreInfoSection } from "./MoreInfoSection/MoreInfoSection";

interface PersonCardProps {
    person: tableRow | undefined;
}

export const PersonCard = ({person}: PersonCardProps) => {
    return (
        <Card className={styles.card}>
            <Avatar className={styles.image} src={person?.avatar} alt={person?.userName} />
            <div className={styles.primaryText}>{person?.userName}</div>
            <Rating value={person?.rating} readOnly/>
            <MoreInfoSection 
                projects={person?.projects ?? 0}
                commits={person?.commits ?? 0}
                followers={person?.followers ?? 0}
            />
        </Card>
    );
}