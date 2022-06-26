import hljs from 'highlight.js';

export const getHighlightCode = (code: string, lang: string) => hljs.highlight(code, { language: lang || 'jsx' }).value;

export const upperFirst = ([first, ...rest]: string) => first?.toUpperCase() + rest.join('');

export const downloadFile = (blob: Blob, filename: string) => {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', decodeURI(filename));
    document.body.appendChild(link);
    link.click();
};
