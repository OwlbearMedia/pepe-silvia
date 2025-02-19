'use client';

import { useState } from 'react';
import isLength from 'validator/es/lib/isLength';
import PasswordIcon from '@/app/ui/icons/PasswordIcon';
import type { BaseSyntheticEvent } from 'react';

interface Input {
  label?: string;
  id?: string;
  placeholder?: string;
  min?: string;
  max?: string;
}

export default function Input({ label, id, placeholder, min, max }: Input) {
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
    if (min && max) {
      if (!isLength(e.target.value, { min: parseInt(min, 10), max: parseInt(max, 10) })) {
        setError(true);
        setErrorMessage('Please enter password between 6 and 20 characters');
      } else {
        setError(false);
        setErrorMessage('');
      }
    }
  }

  return (
    <div className="my-2">
      <label className="input input-bordered flex items-center gap-2">
        <span className="sr-only">{label || 'Enter password'}</span>
        <PasswordIcon />
        <input
          id={id || 'password'}
          type="password"
          name={id || 'password'}
          className="grow"
          placeholder={placeholder || 'Password'}
          onBlur={validate}
          {...(min ? { min } : null)}
          {...(max ? { max } : null)}
        />
      </label>
      {hasError ? Error({ message: errorMessage }) : ''}
    </div>
  );
}
