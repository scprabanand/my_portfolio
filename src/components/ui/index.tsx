import React from 'react';

export const Button = ({ children }: { children: React.ReactNode }) => <button className="px-4 py-2 bg-accent text-white rounded">{children}</button>;
export const Card = ({ children }: { children: React.ReactNode }) => <div className="p-6 bg-white dark:bg-slate shadow-lg rounded-xl">{children}</div>;
export { SectionHeading } from './SectionHeading';
export const Badge = ({ children }: { children: React.ReactNode }) => <span className="px-2 py-1 bg-accent/20 text-accent rounded-md text-sm">{children}</span>;
export { Timeline } from './Timeline';
export { AnimatedCounter } from './AnimatedCounter';

