import { store } from '../../app/store'
import { notesApiSlice } from '../notes/notesApiSlice'
import { usersApiSlice } from '../users/usersApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
    useEffect(() => {
        console.log('subscribing')
        store.dispatch(notesApiSlice.util.prefetch('getNotes', 'notesList', { force: true }))
        store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true }))
        // console.log(users)
        // return () => {
        //     console.log('unsubscribing')
        //     // console.log(users.unsubscribe())
        //     notes.unsubscribe()
        //     users.unsubscribe()
        // }
    }, [])

    return <Outlet />
}
export default Prefetch