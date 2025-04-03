import React from 'react';

function EnrollmentForm() {
  return (
    <div>
      <h1>Enrollment Form</h1>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email" />
      <button>Submit</button>
    </div>
  );
}

export default EnrollmentForm;
