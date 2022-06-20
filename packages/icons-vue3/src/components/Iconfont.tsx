import { FunctionalComponent } from 'vue';
import Icon from './Icon';

const customCache = new Set<string>();

export interface CustomIconOptions {
    scriptUrl: string | string[];
    extraCommonProps?: { [key: string]: any };
}

export const createFromIconfont = (options: CustomIconOptions): FunctionalComponent<{ icon: string; prefix?: string }> => {
    const { scriptUrl, extraCommonProps = {} } = options;
    if (typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function') {
        if (Array.isArray(scriptUrl)) {
            // 因为iconfont资源会把svg插入before，所以前加载相同type会覆盖后加载，为了数组覆盖顺序，倒叙插入
            createScriptUrlElements(scriptUrl.reverse());
        } else {
            createScriptUrlElements([scriptUrl]);
        }
    } else {
        console.warn('😩😩😩 Make sure in browser environment');
    }
    return (props, context) => {
        const { icon, prefix, ...restProps } = { ...extraCommonProps, ...props, ...context.attrs };
        return (
            <Icon {...restProps} name={icon}>
                <svg class='gupoIcon-icon' aria-hidden='true'>
                    <use xlinkHref={`#${prefix || 'icon'}-${icon}`} />
                </svg>
            </Icon>
        );
    };
};

function isValidCustomScriptUrl(scriptUrl: string): boolean {
    return typeof scriptUrl === 'string' && !!scriptUrl.length && !customCache.has(scriptUrl);
}

export function createScriptUrlElements(scriptUrls: string[], index = 0): void {
    const currentScriptUrl = scriptUrls[index];
    if (isValidCustomScriptUrl(currentScriptUrl)) {
        const script = document.createElement('script');
        script.setAttribute('src', currentScriptUrl);
        script.setAttribute('data-namespace', currentScriptUrl);
        if (scriptUrls.length > index + 1) {
            script.onload = () => {
                createScriptUrlElements(scriptUrls, index + 1);
            };
            script.onerror = () => {
                createScriptUrlElements(scriptUrls, index + 1);
            };
        }
        customCache.add(currentScriptUrl);
        document.body.appendChild(script);
    }
}
