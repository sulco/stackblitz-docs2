---
title: Hello World
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors!

I can write **Markdown** alongside my _JSX_!

Welcome to StackBlitz! We've created this documentation to help answer any questions you may have about what StackBlitz is, how to use it and what its APIs are.

### Just learning about StackBlitz?
Take a look at our [announcement post](https://medium.com/@ericsimons/stackblitz-online-vs-code-ide-for-angular-react-7d09348497f4) which covers our core functionality, feature set and motivations behind the project.

### Curious how our technology works?
We recommend [reading the writeup](https://medium.com/@ericsimons/introducing-turbo-5x-faster-than-yarn-npm-and-runs-natively-in-browser-cc2c39715403) we did and checking out our [Github repo](https://github.com/stackblitz/core).