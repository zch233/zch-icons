// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UpCircleTwotoneSvg from 'icons-base/es/asn/UpCircleTwotone';

export interface UpCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUpCircleTwotone: UpCircleTwotoneIconType = (props, context) => (
    <Icon name='UpCircleTwotone' {...{ ...props, ...context.attrs }} icon={UpCircleTwotoneSvg} />
);

IconUpCircleTwotone.displayName = 'IconUpCircleTwotone';
IconUpCircleTwotone.theme = 'twotone';
IconUpCircleTwotone.originName = 'up-circle';

export default IconUpCircleTwotone;
