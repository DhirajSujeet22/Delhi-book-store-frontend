import React from 'react'

const Myorders = () => {

    const orders = [
        {
          id: 1,
          date: '2024-10-01',
          status: 'Delivered',
          total: '$29.99',
        },
        {
          id: 2,
          date: '2024-09-15',
          status: 'In Transit',
          total: '$15.99',
        },
        {
          id: 3,
          date: '2024-08-30',
          status: 'Delivered',
          total: '$45.00',
        },
      ];
    
      const handleReorder = (orderId) => {
        alert(`Reordering items from order ID: ${orderId}`);
        // Add logic for reordering items
      };
  return (
    <div className="container mt-5 mb-6">
      <h1 className="text-center">Order History</h1>
      <div className="mt-4">
        <table className="table table-bordered table-responsive">
          <thead className="thead-light">
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Order Date</th>
              <th scope="col">Status</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>{order.total}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm me-2"
                    onClick={() => alert(`Viewing details for order ID: ${order.id}`)}
                  >
                    View Details
                  </button>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleReorder(order.id)}
                  >
                    Reorder
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Myorders