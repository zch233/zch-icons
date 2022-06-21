import hljs from 'highlight.js';

export const getHighlightCode = (code: string, lang: string) => hljs.highlight(code, { language: lang || 'jsx' }).value;
