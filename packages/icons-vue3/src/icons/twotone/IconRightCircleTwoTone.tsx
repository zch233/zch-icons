// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RightCircleTwotoneSvg from 'icons-base/es/asn/RightCircleTwotone';

export interface RightCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRightCircleTwotone: RightCircleTwotoneIconType = (props, context) => (
    <Icon name='RightCircleTwotone' {...{ ...props, ...context.attrs }} icon={RightCircleTwotoneSvg} />
);

IconRightCircleTwotone.displayName = 'IconRightCircleTwotone';
IconRightCircleTwotone.theme = 'twotone';
IconRightCircleTwotone.originName = 'right-circle';

export default IconRightCircleTwotone;
