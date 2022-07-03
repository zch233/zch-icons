// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LeftCircleTwotoneSvg from 'icons-base/es/asn/LeftCircleTwotone';

export interface LeftCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLeftCircleTwotone: LeftCircleTwotoneIconType = (props, context) => (
    <Icon name='LeftCircleTwotone' {...{ ...props, ...context.attrs }} icon={LeftCircleTwotoneSvg} />
);

IconLeftCircleTwotone.displayName = 'IconLeftCircleTwotone';
IconLeftCircleTwotone.theme = 'twotone';
IconLeftCircleTwotone.originName = 'left-circle';

export default IconLeftCircleTwotone;
