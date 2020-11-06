import { useState } from "react"

export default function AddContact(props) {

    const [Contact, setContact] = useState({
        name: '',
        email: '',
        tel: ''
    })

    const handleChange = (e) => {
        setContact({ ...Contact, [e.target.id]: e.target.value })
    }

    const checkInputs = () => {
        props.addContact(Contact)

        setContact({
            name: '',
            email: '',
            tel: ''
        })
        document.querySelector('#name').focus()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Contact.id = Math.floor(Math.random() * 10000);

        if (Contact.name.trim() === '') {
            document.querySelector('.fullname span').style.display = 'block'
            return
        }
        else if (Contact.email.trim() === '') {
            document.querySelector('.email span').style.display = 'block'
            return
        }
        else if (Contact.tel.trim() === '') {
            document.querySelector('.tel span').style.display = 'block'
            return
        }
        else {
            checkInputs()
        }
  
    }
    const handleFocus = (e) => {
        e.target.nextSibling.style.display='none'
    }

    return <>
        <div className="wrapper">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="fullname">
                    <input type="text" id="name" placeholder="full name..." autoFocus={true} onFocus={e => handleFocus(e)} value={Contact.name} onChange={(e) => handleChange(e)} />
                    <span>Enter Your Name</span>
                </div>
                <div className="email">
                    <input type="email" id='email' placeholder="email..." onFocus={e => handleFocus(e)} value={Contact.email} onChange={(e) => handleChange(e)} />
                    <span>Enter Your Email</span>
                </div>
                <div className="tel">
                    <input type="tel" id="tel" placeholder="tel..." onFocus={e => handleFocus(e)} value={Contact.tel} onChange={(e) => handleChange(e)} />
                    <span>Enter Your Tel</span>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    </>
} 