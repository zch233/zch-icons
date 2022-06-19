<template>
    <pre>
    <code v-html="str"></code>
  </pre>
</template>

<script>
import hljs from 'highlight.js';

export default {
    props: {
        code: String,
        lang: String,
    },
    setup(props) {
        return {
            str: hljs.highlight(props.code, { language: props.lang || 'jsx' }).value,
        };
    },
};
</script>
