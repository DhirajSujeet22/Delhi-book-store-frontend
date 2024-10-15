
import React from "react";

const ReturnPolicyPage = () => {
  return (
    <>
    <div className="w-ful mx-auto p-6 md:p-10 lg:p-14 bg-white ">
      <h1 className="text-[30px] text-center font-bold mb-6 text-red-600">Shipping Policy</h1>
      
      <p className="text-gray-700 mb-4">
        As per the Indian government guidelines, we ship to all serviceable pin codes in India. We generally dispatch all our orders within 48 hours of receipt. All purchases are shipped from our warehouse by reputed courier agencies. Please allow us 5-7 days from receipt of your order for delivery. For any queries, reach out to us at{" "}
        <a href="mailto:support@kitabay.com" className="text-blue-500 underline">
          support@kitabay.com
        </a>{" "}
        or call us at{" "}
        <a href="tel:+917742473777" className="text-blue-500 underline">
          +91-7742473777
        </a>.
      </p>

      <h2 className="text-2xl font-bold mb-4">Shipping Charges</h2>

      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Enjoy free delivery on all prepaid orders above ₹599.</li>
        <li>Prepaid orders below ₹599 will be charged ₹50 for shipping.</li>
        <li>All COD orders will be charged ₹60 for shipping.</li>
        <li>
          For orders that are cancelled after dispatch or rejected (in case of COD orders), shipping costs will be charged for both to & fro at actuals. For pre-paid orders, cancellations post dispatch will not be eligible for refund.
        </li>
      </ul>

      <p className="text-gray-700 mb-6">
        Kitabay shall not be responsible for delivery taken by an alternative person. All claims for shortages or damages must be reported to customer service on the day of delivery with an unboxing video or photos via email on{" "}
        <a href="mailto:support@kitabay.com" className="text-blue-500 underline">
          support@kitabay.com
        </a>{" "}
        or call on{" "}
        <a href="tel:+917742473777" className="text-blue-500 underline">
          +91-7742473777
        </a>{" "}
        or Whatsapp. An unboxing video is mandatory to claim shortages or damage in transit.
      </p>
    </div>


<div className="w-full mx-auto p-6 md:p-10 lg:p-14 bg-white border border-gray-200 rounded-lg shadow-md">
<h1 className="text-[30px] font-bold text-center mb-6 text-red-600">Returns & Refunds Policy</h1>

<p className="text-gray-700 mb-4">
  We would entertain a refund, only on the below condition/conditions are full-filled:
</p>

<h2 className="text-2xl font-semibold mb-4">Conditions for Return/Refund:</h2>

<ul className="list-disc list-inside text-gray-700 mb-6">
  <li>
    For any Return/Refund of order/orders, the buyer/customer shall intimate within 7 days of delivery from their Kitabay dashboard, Instagram Page{" "}
    <a href="https://instagram.com/kitabay.store" className="text-blue-500 underline">
      "Delhi Book Store"
    </a>{" "}
    or email on{" "}
    <a href="mailto:kitabay.com@gmail.com" className="text-blue-500 underline">
      kitabay.com@gmail.com
    </a>, mentioning the reason for return. Upon reviewing, the amount will be refunded after deducting shipment, packaging & service charges (around 60% of the order amount).
  </li>
  <li>
    A full refund will be credited if the cancellation request is sent before dispatch from the Kitabay warehouse. Once dispatched, you can make a cancellation request after delivery, and 60% of the order amount (shipment, packaging & service charges) will be deducted.
  </li>
  <li>
    For the product "Mystery Box," a return means the return of the entire box and its contents. No individual items can be canceled, replaced, or returned. For a "Mystery Box" refund, notify us within 7 days via the Kitabay dashboard, Instagram page, or email, and 60% of the order amount will be deducted.
  </li>
</ul>

<h2 className="text-2xl font-semibold mb-4">Note:</h2>
<ul className="list-disc list-inside text-gray-700 mb-6">
  <li>Estimated time to process and credit the refund may take up to 7-10 days.</li>
  <li>Our return address will be mentioned on the billing invoice and on the Contact Us page.</li>
  <li>Refunds will be issued using the same mode of payment used while placing the order.</li>
  <li>Refunds will not exceed the actual value of the goods.</li>
  <li>Custom duties, taxes, or COD charges will not be refunded.</li>
</ul>

<h2 className="text-2xl font-semibold mb-4">No Refunds Will Be Given in the Following Cases:</h2>
<ul className="list-disc list-inside text-gray-700 mb-6">
  <li>Incorrect or outdated delivery address, including any form of PO Box address.</li>
  <li>After 3 failed delivery attempts by courier agencies.</li>
  <li>Package refused by recipient.</li>
  <li>Products returned in a damaged condition.</li>
  <li>Missing contents of the product.</li>
</ul>
</div>
</>

  );
};

export default ReturnPolicyPage;
