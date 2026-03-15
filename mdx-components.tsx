import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 
        style={{ 
          color: 'white', 
          fontSize: '2.5rem', 
          fontFamily: 'var(--font-work-sans)',
          fontWeight: 700,
          marginTop: '2rem',    // Space above the title
          marginBottom: '1rem'  // Space below the title
        }} 
        {...props} 
      />
    ),
    h2: (props) => (
      <h2 
        style={{ 
          color: 'white', 
          fontSize: '1.5rem', 
          fontFamily: 'var(--font-work-sans)',
          fontWeight: 600,
          marginTop: '1.5rem',  // Space above
          marginBottom: '0.75rem' // Space below
        }} 
        {...props} 
      />
    ),
    ...components,
  };
}