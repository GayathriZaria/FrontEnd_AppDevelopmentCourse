import React, { useRef, useState } from 'react'
import '../../assets/css/Book.css'

function Book() {
    const list = [
        {
            id: 1, 
            name: "Seetha",
            events:"Birthday",
            mobile : "9876543210",
            place:"Chennai"
            
        },
        {
            id: 2, 
            name: "Chithu",
            events:"Wedding",
            mobile : "9753108642",
            place:"Coimbatore"
            
        },
    ]
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    return(
        <div className='crud'>
            <div>
            <AddList setList = {setList }/>
            <form onSubmit={handleSubmit}>
            <table>
                {
                    lists.map((current) => (
                        updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                        <tr>
                            <td>{current.name}</td>
                            <td>{current.events}</td>
                            <td>{current.mobile}</td>
                            <td>{current.place}</td>
                            <td>
                                <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
            </div>
        </div>
    )

    function handleEdit(id) {
        setUpdateState(id)
    }
    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        const events = event.target.elements.events.value
        const mobile = event.target.elements.mobile.value
        const place = event.target.elements.place.value
        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, name:name, events: events, mobile:mobile, place:place} : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}

function EditList({current, lists, setList}) {
    function handInputname(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, name :value} : li
        ))

        setList(newlist)
    }
    function handInputGen(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, events :value} : li
        ))

        setList(newlist)
    }
    function handInputDate(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, mobile :value} : li
        ))

        setList(newlist)
    }
    function handInputDoc(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, place :value} : li
        ))

        setList(newlist)
    }
    return(
        <tr>
            <td><input type="text" onChange={handInputname} name='name' value={current.name}/></td>
            <td><input type="text" onChange={handInputGen} name='Gen' value={current.events}/></td>
            <td><input type="text" onChange={handInputDate} name='Date_vis' value={current.mobile}/></td>
            <td><input type="text" onChange={handInputDoc} name='Doc_id' value={current.place}/></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
}

function AddList({setList}) {
    const nameRef = useRef()
    const eventsRef = useRef()
    const mobileRef = useRef()
    const placeRef = useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const events = event.target.elements.events.value;
        const mobile = event.target.elements.mobile.value;
        const place = event.target.elements.place.value;
        const newlist = {
            id: 3,
            name,
            events,
            mobile,
            place
        }
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        nameRef.current.value = ""
        eventsRef.current.value = ""
        mobileRef.current.value = ""
        placeRef.current.value = ""
    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter your Name" ref={nameRef}/>
            <input type="text" name="event" placeholder="Enter event type" ref={eventsRef}/>
            <input type="text" name="mobile" placeholder="Enter mobile number" ref={mobileRef}/>
            <input type="text" name="place" placeholder="Enter event's location" ref={placeRef}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default Book;