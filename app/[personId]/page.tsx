
import { Avatar } from "@mui/material"
import { useGetAllUsers } from "../hooks/useGetAllUsers"

export default function Person ({params}: {params: {personId: string}}) {
    const users = useGetAllUsers();
    const user = users.find((currUser) => currUser.id === params.personId);

    return (
        <Avatar alt={user?.userName} />
    )
}