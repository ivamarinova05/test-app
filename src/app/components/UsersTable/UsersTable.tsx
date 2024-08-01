
import { tableRow } from '@/src/types/types';
import styles from './UsersTable.module.css'
import { PersonCard } from '../PersonCard/PersonCard';
import Link from 'next/link';

interface UsersTableProps {
    tableData: tableRow[];
}

export const UsersTable = ({tableData}: UsersTableProps) => {
    return (
        <div className={styles.background}>
            {(tableData.length !== 0) && tableData.map((row) => (
                <Link href={`/${row.id}`}>
                    <PersonCard person={row} />
                </Link>))}
        </div>
    );
}