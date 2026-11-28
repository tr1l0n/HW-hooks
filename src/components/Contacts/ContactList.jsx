export function ContactList({ contacts,onDelete }) {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>{contact.name}: {contact.number}  <button onClick={()=> onDelete(contact.id)}>delete</button></li>
            ))}
        </ul>
    )
}