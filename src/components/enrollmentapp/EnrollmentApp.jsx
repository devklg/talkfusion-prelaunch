import React, { useState } from 'react';
import EnrollmentForm from './EnrollmentForm';
import SignupConfirmation from './SignupConfirmation';
import ErrorDisplay from './ErrorDisplay';

function EnrollmentApp() {
  const [signupSuccessful, setSignupSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Placeholder submit handler - replace with actual API call later
  const handleSubmit = (formData) => {
    // Simulate a successful signup
    setSignupSuccessful(true);
  };

  return (
    <div>
      {signupSuccessful ? (
        <SignupConfirmation />
      ) : (
        <>
          <EnrollmentForm onSubmit={handleSubmit} />
          {errorMessage && <ErrorDisplay message={errorMessage} />}
        </>
      )}
    </div>
  );
}

export default EnrollmentApp;
