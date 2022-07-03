// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UpSquareTwotoneSvg from 'icons-base/es/asn/UpSquareTwotone';

export interface UpSquareTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUpSquareTwotone: UpSquareTwotoneIconType = (props, context) => (
    <Icon name='UpSquareTwotone' {...{ ...props, ...context.attrs }} icon={UpSquareTwotoneSvg} />
);

IconUpSquareTwotone.displayName = 'IconUpSquareTwotone';
IconUpSquareTwotone.theme = 'twotone';
IconUpSquareTwotone.originName = 'up-square';

export default IconUpSquareTwotone;
