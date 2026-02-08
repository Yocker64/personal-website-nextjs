import React from 'react'

interface SectionTitleProps {
  text: string;
}

const SectionTitle = ({ text }: SectionTitleProps) => (
  <p className="justify-self-center py-6 text-2xl font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
    {text}
  </p>
);

export default SectionTitle;