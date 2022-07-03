// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FastBackwardOutlinedSvg from 'icons-base/es/asn/FastBackwardOutlined';

export interface FastBackwardOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFastBackwardOutlined: FastBackwardOutlinedIconType = (props, context) => (
    <Icon name='FastBackwardOutlined' {...{ ...props, ...context.attrs }} icon={FastBackwardOutlinedSvg} />
);

IconFastBackwardOutlined.displayName = 'IconFastBackwardOutlined';
IconFastBackwardOutlined.theme = 'outlined';
IconFastBackwardOutlined.originName = 'fast-backward';

export default IconFastBackwardOutlined;
