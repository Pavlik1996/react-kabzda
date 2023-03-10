import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    console.log('count')
    return <div>{props.count}</div>
}

type UsersType = {
    users: Array<string>
}

const UsersSecret = (props: UsersType) => {
    console.log('users')
    return (
        <div>
            {props.users.map((el, index) => <div key={index}>{el}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Pasha', 'Masha', 'Diana'])

    const addUser = () => {
        const newUser = [...users, 'Sveta ' + new Date().getDate()]
        setUsers(newUser)
    }

    users.push('Sveta ' + new Date().getDate())

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add User</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </div>
    )
}



