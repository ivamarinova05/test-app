'use client'
import {useGetAllUsers} from "../../hooks/useGetAllUsers"
import {PersonCard} from "../components/PersonCard/PersonCard"

export default function Person ({params}: {params: {personId: string}}) {
    const users = useGetAllUsers();
    const user = users.find((currUser) => currUser.id === params.personId);

    return (
         <PersonCard person={user}/>
    );
}