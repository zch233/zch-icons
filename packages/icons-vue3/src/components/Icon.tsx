import { FunctionalComponent, HTMLAttributes } from 'vue';
import { AbstractNode, IconDefinition } from 'icon-base/es/types';
import { generateSvgNode, useInsertStyles } from '../utils';
import { generate as generateColor } from '@ant-design/colors';

export interface IconProps extends HTMLAttributes {
    spin?: boolean;
    rotate?: number;
    size?: number;
    color?: string;
    icon?: IconDefinition;
    name?: string;
    primaryColor?: string; // only for two-tone
    secondaryColor?: string; // only for two-tone
}

const Icon: FunctionalComponent<IconProps> = (props, context) => {
    const { attrs, slots } = context;
    const { spin, rotate, size, icon, name, color, primaryColor, secondaryColor, ...restProps } = { ...props, ...attrs };
    const children = slots.default && slots.default();
    const classResult = {
        gupoIcon: true,
        'gupoIcon-spin': spin,
        [`gupoIcon-svg-${name}`]: !!name,
    };

    const styleResult = {
        ...(rotate
            ? {
                  msTransform: `rotate(${rotate}deg)`,
                  transform: `rotate(${rotate}deg)`,
              }
            : undefined),
        ...(size
            ? {
                  fontSize: `${size}px`,
              }
            : undefined),
        ...(color
            ? {
                  color,
              }
            : undefined),
    };
    useInsertStyles();

    let target = icon;
    if (target && typeof target.icon === 'function') {
        const color = primaryColor || '#1890ff';
        target = {
            ...target,
            icon: target.icon(color, secondaryColor || generateColor(color)[0]),
        };
    }
    return target ? (
        <span role='img' aria-label={name} {...restProps} class={classResult} style={styleResult}>
            {generateSvgNode(target.icon as AbstractNode, `gupoIcon-svg-${target.name}`, {
                width: '1em',
                height: '1em',
                'data-icon': target.name,
                fill: 'currentColor',
                'aria-hidden': 'true',
            })}
        </span>
    ) : (
        <span role='img' aria-label={name} {...restProps} class={classResult} style={styleResult}>
            {children}
        </span>
    );
};

export default Icon;
