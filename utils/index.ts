import hljs from 'highlight.js';

export const getHighlightCode = (code: string, lang: string) => hljs.highlight(code, { language: lang || 'jsx' }).value;

export const upperFirst = ([first, ...rest]: string) => first?.toUpperCase() + rest.join('');
