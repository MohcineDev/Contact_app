import { useEffect, useState } from "react"

export default function AddContact(props) {

    const [Contact, setContact] = useState({
        name: '',
        email: '',
        tel: ''
    })

    useEffect(() => {
        document.querySelector('#name').focus()
    }, [])

    const handleChange = (e) => {
        setContact({ ...Contact, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Contact.id = Math.floor(Math.random() * 10000);
        props.addContact(Contact)
        e.target.children[0].value = ''
        e.target.children[1].value = ''
        e.target.children[2].value = ''
        document.querySelector('#name').focus()
    }

    return <>
        <div className="wrapper">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" id="name" placeholder="full name..." autoFocus={true} onChange={(e) => handleChange(e)} />
                <input type="email" id='email' placeholder="email..." onChange={(e) => handleChange(e)} />
                <input type="text" id="tel" placeholder="tel..." onChange={(e) => handleChange(e)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    </>
} 