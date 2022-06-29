import Icon, { TwoToneColor } from './Icon';

export const setTwoToneColor = (primaryColor: string, secondaryColor?: string): void =>
    Icon.setTwoToneColors({
        primaryColor,
        secondaryColor,
    });

export const getTwoToneColor = (): TwoToneColor => {
    const { calculated, ...rest } = Icon.getTwoToneColors();
    if (!calculated) {
        return { primaryColor: rest.primaryColor };
    }

    return rest;
};
