import axios from "axios";
import {PersonCard} from "../components/PersonCard/PersonCard"
import { tableRow } from "@/src/types/types";

export default async function Person ({params}: {params: {personId: string}}) {
    const { data }  = await axios.get('http://localhost:3000/api');
    const user = data.tableData.find((currUser: tableRow) => currUser.id === params.personId);

    return (
         <PersonCard person={user}/>
    );
}