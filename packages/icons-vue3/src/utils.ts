import { h, nextTick } from 'vue';
import insertCss from './insert-css';
import { AbstractNode } from 'icon-base/es/types';

export const iconStyles = `
.gupoIcon {
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-style: normal;
    line-height: 0;
    color: inherit;
    text-align: center;
    text-rendering: optimizelegibility;
    text-transform: none;
    vertical-align: -0.125em;
}

.gupoIcon > * {
    line-height: 1;
}

.gupoIcon svg {
    display: inline-block;
}

.gupoIcon::before {
    display: none;
}

.gupoIcon svg {
    width: 1em;
    height: 1em;
    fill: currentcolor;
    overflow: hidden;
    vertical-align: -0.15em;
}

.gupoIcon[tabindex] {
    cursor: pointer;
}

.gupoIcon-spin::before,
.gupoIcon-spin {
    display: inline-block;
    animation: loading-circle 1s infinite linear;
}

@keyframes loading-circle {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes loading-circle {
    100% {
        transform: rotate(360deg);
    }
}
`;

let cssInjectedFlag = false;

export const useInsertStyles = (styleStr: string = iconStyles): void => {
    nextTick(() => {
        if (!cssInjectedFlag) {
            if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
                insertCss(styleStr, {
                    prepend: true,
                });
            }
            cssInjectedFlag = true;
        }
    });
};

export const generateSvgNode = (node: AbstractNode, key: string, rootProps?: { [key: string]: any } | false): any => {
    if (!rootProps) {
        return h(
            node.tag,
            { key, ...node.attrs },
            (node.children || []).map((child, index) => generateSvgNode(child, `${key}-${node.tag}-${index}`))
        );
    }
    return h(
        node.tag,
        {
            key,
            ...rootProps,
            ...node.attrs,
        },
        (node.children || []).map((child, index) => generateSvgNode(child, `${key}-${node.tag}-${index}`))
    );
};
