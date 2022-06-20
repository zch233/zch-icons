// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FastBackwardOutlinedSvg from 'icon-base/es/asn/FastBackwardOutlined';

export interface FastBackwardOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFastBackwardOutlined: FastBackwardOutlinedIconType = (props, context) => (
    <Icon name='FastBackwardOutlined' {...{ ...props, ...context.attrs }} icon={FastBackwardOutlinedSvg} />
);

IconFastBackwardOutlined.displayName = 'IconFastBackwardOutlined';

export default IconFastBackwardOutlined;
