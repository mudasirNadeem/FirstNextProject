import React from 'react';

function Invoice() {
  const customer = "John Doe";
  const date = "2025-06-02";
  const items = [
    { name: "Apple", quantity: 2, price: 1 },
    { name: "Banana", quantity: 3, price: 0.5 }
  ];

  const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const styles = {
    container: { padding: '20px', fontFamily: 'Arial', maxWidth: '500px', margin: 'auto' },
    table: { marginTop: '20px' },
    th: { border: '1px solid #000', padding: '8px', backgroundColor: '#f0f0f0' },
    td: { border: '1px solid #000', padding: '8px', textAlign: 'center' },
    total: { textAlign: 'right', marginTop: '20px' }
  };

  return (
    <div style={styles.container}>
      <h2>Invoice</h2>
      <p><strong>Customer:</strong> {customer}</p>
      <p><strong>Date:</strong> {date}</p>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Item</th>
            <th style={styles.th}>Qty</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>${item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Invoice;
