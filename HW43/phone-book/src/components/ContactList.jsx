import React from 'react';

export default function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <h2>Список контактів</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Імʼя</th>
            <th>Прізвище</th>
            <th>Телефон</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.phone}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(contact.id)}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
