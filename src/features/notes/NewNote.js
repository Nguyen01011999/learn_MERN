// import { useSelector } from 'react-redux'
import { useGetUsersQuery } from '../users/usersApiSlice'
import NewNoteForm from './NewNoteForm'

import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

const NewNote = () => {
    useTitle('techNotes: New Note')

    // const users = useSelector(selectAllUsers)
    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })
    // if (!users?.length) return <p>Not Currently Available</p>
    if (!users?.length) return <PulseLoader color={"#FFF"} />
    const content = <NewNoteForm users={users} />

    // const content = users ? <NewNoteForm users={users} /> : <p>Loading...</p>

    return content
}
export default NewNote