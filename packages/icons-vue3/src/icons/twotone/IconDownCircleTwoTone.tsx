// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DownCircleTwotoneSvg from 'icons-base/es/asn/DownCircleTwotone';

export interface DownCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDownCircleTwotone: DownCircleTwotoneIconType = (props, context) => (
    <Icon name='DownCircleTwotone' {...{ ...props, ...context.attrs }} icon={DownCircleTwotoneSvg} />
);

IconDownCircleTwotone.displayName = 'IconDownCircleTwotone';
IconDownCircleTwotone.theme = 'twotone';
IconDownCircleTwotone.originName = 'down-circle';

export default IconDownCircleTwotone;
