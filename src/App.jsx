import { useEffect, useState } from 'react'
import {Section} from './components/feedback/Section'
import { FeedbackOption } from './components/feedback/FeedbackOption';
import { Statistics } from './components/feedback/Statistics';
import { Notification } from './components/feedback/Notification';
import { ContactForm } from './components/Contacts/ContactForm';
import { ContactList } from './components/Contacts/ContactList';
import { Filter } from './components/Contacts/Filter';
function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() =>JSON.parse(localStorage.getItem('contacts'))?? [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const onLeaveFeedback = value => {
    switch (value) {
      case "good":
        setState((prev) => ({ ...prev, good: prev.good + 1 }));
        return;
      case "neutral":
        setState((prev) => ({ ...prev, neutral: prev.neutral + 1 }));
        return;
      case "bad":
        setState((prev) => ({ ...prev, bad: prev.bad + 1 }));
        return;
      default:
        return;
    }
  }
  const total = state.good + state.neutral + state.bad;
  const positivePercentage = total === 0 ? 0 : Math.floor((state.good / total) * 100);
  const addContact = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = crypto.randomUUID();
    if (contacts.some(contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim())){
      alert(`${name} is already in contacts`)
      return;
    }
    setContacts(prev => ([
      ...prev,
      { id, name, number }
    ]));
    form.reset();
  }
  const onDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }
  const handleFilter = e => {
    setFilter(e.target.value);
  }
  
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOption onLeaveFeedback={onLeaveFeedback} />
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter onFilter={handleFilter} filter={filter} />
        <ContactList contacts={filteredContacts} onDelete={onDelete}/>
      </Section>
    </div>
  );
}

export default App
