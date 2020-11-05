export default function DisplayContacts(props) {

    const allCotacts = props.Contacts.length > 0 ? props.Contacts.map(item =>
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.tel}</td>
            <td>
                <button onClick={() => props.deleteContact(item)} >Delete</button>
            </td>
        </tr>
    ) : <tr><td colSpan="4">Sorry Nothing To Show here!!</td></tr>

    return <>
        {allCotacts}
    </>
}