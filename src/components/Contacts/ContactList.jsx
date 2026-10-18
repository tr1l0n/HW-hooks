export function ContactList({ contacts,onDelete }) {
    return (
        <ul>
            {contacts.map(contact => (
                <li id={contact.id}>{contact.name}: {contact.number}  <button onClick={()=> onDelete(contact.id)}>delete</button></li>
            ))}
        </ul>
    )
}