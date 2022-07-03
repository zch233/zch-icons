// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FastForwardOutlinedSvg from 'icons-base/es/asn/FastForwardOutlined';

export interface FastForwardOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFastForwardOutlined: FastForwardOutlinedIconType = (props, context) => (
    <Icon name='FastForwardOutlined' {...{ ...props, ...context.attrs }} icon={FastForwardOutlinedSvg} />
);

IconFastForwardOutlined.displayName = 'IconFastForwardOutlined';
IconFastForwardOutlined.theme = 'outlined';
IconFastForwardOutlined.originName = 'fast-forward';

export default IconFastForwardOutlined;
