'use client';

import { useState } from 'react';
import isEmail from 'validator/es/lib/isEmail';
import EmailIcon from '@/app/ui/icons/EmailIcon';
import type { BaseSyntheticEvent } from 'react';

interface Input {
  label?: string;
  id?: string;
  placeholder?: string;
}

export default function EmailInput({ label, id, placeholder }: Input) {
  const [hasError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function Error({ message }: { message: string }) {
    return (
      <div role="alert" className="alert alert-error my-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{message}</span>
      </div>
    );
  }

  function validate(e: BaseSyntheticEvent) {
    if (!isEmail(e.target.value)) {
      setError(true);
      setErrorMessage('Please enter a valid email address');
    } else {
      setError(false);
      setErrorMessage('');
    }
  }

  return (
    <div className="my-2">
      <label className="input input-bordered flex items-center gap-2">
        <span className="sr-only">{label || 'Enter email'}</span>
        <EmailIcon />
        <input
          id={id || 'email'}
          type='email'
          name={id || 'email'}
          className="grow"
          placeholder={placeholder || 'Email'}
          onBlur={validate}
        />
      </label>
      {hasError ? Error({ message: errorMessage }) : ''}
    </div>
  );
}
