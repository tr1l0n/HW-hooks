export function ContactForm({onSubmit}) {
    return (
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
            <input
            type="text"
            name="name"
            id="name"
            pattern="^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]+(([' -][a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ ])?[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            />

            <label htmlFor="number">Number</label>
            <input
            type="tel"
            name="number"
            id="number"
            pattern="[+]?[0-9]{1,4}[-. ]?[(]?[0-9]{1,3}[)]?[-. ]?[0-9]{1,4}[-. ]?[0-9]{1,4}[-. ]?[0-9]{1,9}"
            title="Phone number must contain digits and may include spaces, dashes, parentheses, dots, and a leading +."
            required
            />
            <button type="submit">Add contact</button>
      </form>
    );
}