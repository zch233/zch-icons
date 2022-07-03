// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RightSquareTwotoneSvg from 'icons-base/es/asn/RightSquareTwotone';

export interface RightSquareTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRightSquareTwotone: RightSquareTwotoneIconType = (props, context) => (
    <Icon name='RightSquareTwotone' {...{ ...props, ...context.attrs }} icon={RightSquareTwotoneSvg} />
);

IconRightSquareTwotone.displayName = 'IconRightSquareTwotone';
IconRightSquareTwotone.theme = 'twotone';
IconRightSquareTwotone.originName = 'right-square';

export default IconRightSquareTwotone;
