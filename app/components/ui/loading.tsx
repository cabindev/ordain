// app/components/ui/loading.tsx
'use client';

import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

type LoadingProps = {
  size?: 'small' | 'medium' | 'large';
  message?: string;
};

type EmptyDataProps = {
  title: string;
  message?: string;
  size?: 'small' | 'medium' | 'large';
};

type ErrorDisplayProps = {
  message: string;
  details?: string;
  size?: 'small' | 'medium' | 'large';
};

// Skeleton Card Component
const SkeletonCard = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`bg-[var(--gray-light)] rounded-lg overflow-hidden shadow-md ${className}`}
      {...props}
    >
      <div className="p-4">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-[var(--gold-primary)] bg-opacity-20 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-[var(--gold-primary)] bg-opacity-20 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-[var(--gold-primary)] bg-opacity-20 rounded"></div>
              <div className="h-4 bg-[var(--gold-primary)] bg-opacity-20 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Skeleton Chart Component
const SkeletonChart = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`bg-[var(--gray-light)] rounded-lg overflow-hidden shadow-md ${className}`}
      {...props}
    >
      <div className="p-4 border-b border-[var(--gold-primary)] border-opacity-30">
        <div className="animate-pulse h-6 bg-[var(--gold-primary)] bg-opacity-20 rounded w-1/3"></div>
      </div>
      <div className="p-6">
        <div className="animate-pulse flex flex-col space-y-5 py-1">
          <div className="h-40 bg-[var(--gold-primary)] bg-opacity-10 rounded-lg flex items-center justify-center">
            <svg className="w-12 h-12 text-[var(--gold-primary)] opacity-30" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.352-.035-.696-.1-1.028A5.001 5.001 0 0010 11z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="h-4 bg-[var(--gold-primary)] bg-opacity-20 rounded w-full"></div>
          <div className="h-4 bg-[var(--gold-primary)] bg-opacity-20 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

// Loading Component
const Loading = ({ size = 'medium', message }: LoadingProps) => {
  const getContainerClass = () => {
    switch (size) {
      case 'small':
        return 'p-4';
      case 'large':
        return 'p-8';
      default:
        return 'p-6';
    }
  };

  return (
    <div className={`w-full ${getContainerClass()}`}>
      <div className="mx-auto max-w-3xl">
        {message && (
          <div className="text-center mb-6">
            <h3 className="text-lg font-medium text-[var(--brown-primary)]">{message}</h3>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <SkeletonCard />
          <SkeletonCard />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkeletonChart />
          <SkeletonChart />
        </div>

        {/* Progress Bar Animation */}
        <div className="mt-8 h-1 w-full bg-[var(--gray-light)] rounded overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-primary)] animate-progressBar"></div>
        </div>
      </div>
    </div>
  );
};

// Empty Data Component
export const EmptyData = ({ title, message, size = 'medium' }: EmptyDataProps) => {
  const getContainerClass = () => {
    switch (size) {
      case 'small':
        return 'p-4';
      case 'large':
        return 'p-8';
      default:
        return 'p-6';
    }
  };

  return (
    <div className={`w-full ${getContainerClass()} bg-white rounded-lg shadow-lg border border-[var(--gold-light)] border-opacity-50`}>
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[var(--gold-light)] bg-opacity-20">
          <svg className="w-8 h-8 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[var(--brown-primary)]">{title}</h3>
        {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
      </div>
    </div>
  );
};

// Error Display Component
export const ErrorDisplay = ({ message, details, size = 'medium' }: ErrorDisplayProps) => {
  const getContainerClass = () => {
    switch (size) {
      case 'small':
        return 'p-4';
      case 'large':
        return 'p-8';
      default:
        return 'p-6';
    }
  };

  return (
    <div className={`w-full ${getContainerClass()} bg-white rounded-lg shadow-lg border border-red-200`}>
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-100">
          <FaExclamationTriangle className="w-8 h-8 text-red-500" />
        </div>
        <h3 className="text-xl font-semibold text-red-700">{message}</h3>
        {details && <p className="mt-2 text-sm text-gray-600">{details}</p>}
      </div>
    </div>
  );
};

// เพิ่ม CSS animation ใน globals.css
// @keyframes progressBar {
//   0% {
//     width: 0%;
//   }
//   50% {
//     width: 70%;
//   }
//   100% {
//     width: 100%;
//   }
// }
// .animate-progressBar {
//   animation: progressBar 2s ease-in-out infinite;
// }

export default Loading;