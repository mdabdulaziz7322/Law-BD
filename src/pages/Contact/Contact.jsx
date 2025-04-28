import React from 'react';


const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Contact Us</h1>
      <p className="text-center text-gray-600 mb-12">
        Feel free to reach out to us for any inquiries or legal assistance.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Our Office</h2>
            <p className="text-gray-600">123 Main Street, New York, NY 10001</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Phone</h2>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Email</h2>
            <p className="text-gray-600">contact@lawfirm.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Working Hours</h2>
            <p className="text-gray-600">Monday - Friday: 9 AM - 5 PM</p>
          </div>
        </div>

        {/* Map or Placeholder */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-700 text-lg">
            <img src="../../../src/assets/henry-perks-BJXAxQ1L7dI-unsplash.jpg" alt="" />
            {/* Later you can add an iframe for Google Maps here */}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Contact;