// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LeftSquareTwotoneSvg from 'gupo-icons-base/es/asn/LeftSquareTwotone';

export interface LeftSquareTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLeftSquareTwotone: LeftSquareTwotoneIconType = (props, context) => (
    <Icon name='LeftSquareTwotone' {...{ ...props, ...context.attrs }} icon={LeftSquareTwotoneSvg} />
);

IconLeftSquareTwotone.displayName = 'IconLeftSquareTwotone';
IconLeftSquareTwotone.theme = 'twotone';
IconLeftSquareTwotone.originName = 'left-square';

export default IconLeftSquareTwotone;
