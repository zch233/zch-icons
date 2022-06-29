import { FunctionalComponent, HTMLAttributes, PropType } from 'vue';
import { AbstractNode, IconDefinition } from 'gupo-icons-base/es/types';
import { generateSvgNode, getSecondaryColor, useInsertStyles } from '../utils';

export interface TwoToneColor {
    primaryColor?: string; // only for two-tone
    secondaryColor?: string; // only for two-tone
}

export interface IconProps extends TwoToneColor, HTMLAttributes {
    spin?: boolean | string;
    rotate?: number | string;
    size?: number | string;
    color?: string;
    icon?: IconDefinition;
    name?: string;
}

export interface TwoToneColorPaletteSetter {
    primaryColor: string;
    secondaryColor?: string;
}

export interface TwoToneColorPalette extends TwoToneColorPaletteSetter {
    calculated?: boolean; // marker for calculation
}

interface Color {
    getTwoToneColors: () => TwoToneColorPalette;
    setTwoToneColors: (twoToneColor: TwoToneColor) => void;
}

export interface GupoIconType extends Color, FunctionalComponent<IconProps> {
    displayName: string;
}

export const defaultPrimaryColor = '#1890ff';

const twoToneColorPalette: TwoToneColorPalette = {
    primaryColor: '#333',
    secondaryColor: '#E6E6E6',
    calculated: false,
};

const setTwoToneColors = ({ primaryColor, secondaryColor }: TwoToneColor): void => {
    twoToneColorPalette.primaryColor = primaryColor || defaultPrimaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(twoToneColorPalette.primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
};

const getTwoToneColors = (): TwoToneColorPalette => ({ ...twoToneColorPalette });

// Initial setting
setTwoToneColors({});

const Icon: GupoIconType = (props, context) => {
    const { attrs, slots } = context;
    const { spin, rotate, size, icon, name, color, primaryColor, secondaryColor, ...restProps } = { ...props, ...attrs };
    const children = slots.default && slots.default();
    const classResult = {
        gupoIcon: true,
        'gupoIcon-spin': spin === '' || !!spin,
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
                  fontSize: size.toString().includes('px') ? size : `${size}px`,
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
        target = {
            ...target,
            icon: target.icon(twoToneColorPalette.primaryColor, twoToneColorPalette.secondaryColor!),
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

Icon.props = {
    icon: Object as PropType<IconDefinition>,
    primaryColor: String as PropType<string>, // only for two-tone
    secondaryColor: String as PropType<string>, // only for two-tone
    name: String as PropType<string>,
    color: String as PropType<string>,
    size: [Number, String] as PropType<number | string>,
    rotate: [Number, String] as PropType<number | string>,
    spin: Boolean as PropType<boolean>,
};
Icon.displayName = 'GupoIcon';
Icon.getTwoToneColors = getTwoToneColors;
Icon.setTwoToneColors = setTwoToneColors;

export default Icon;
