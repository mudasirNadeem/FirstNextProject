import React from 'react';

export default function CustomerPage() {
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Ali Khan', email: 'ali.khan@example.com', phone: '555-444-3333' },
  ];

  return (
    <div className="p-4 w-[100%]">
      <h1 className="text-2xl font-bold mb-4">Customer List</h1>

      <ul className="space-y-4">
        {customers.map((customer) => (
          <li key={customer.id} className="p-4 border rounded shadow">
            <p><strong>Name:</strong> {customer.name}</p>
            <p><strong>Email:</strong> {customer.email}</p>
            <p><strong>Phone:</strong> {customer.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
