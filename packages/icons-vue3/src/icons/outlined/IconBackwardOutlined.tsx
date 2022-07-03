// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BackwardOutlinedSvg from 'icons-base/es/asn/BackwardOutlined';

export interface BackwardOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBackwardOutlined: BackwardOutlinedIconType = (props, context) => (
    <Icon name='BackwardOutlined' {...{ ...props, ...context.attrs }} icon={BackwardOutlinedSvg} />
);

IconBackwardOutlined.displayName = 'IconBackwardOutlined';
IconBackwardOutlined.theme = 'outlined';
IconBackwardOutlined.originName = 'backward';

export default IconBackwardOutlined;
