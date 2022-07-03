// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloseSquareTwotoneSvg from 'icons-base/es/asn/CloseSquareTwotone';

export interface CloseSquareTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCloseSquareTwotone: CloseSquareTwotoneIconType = (props, context) => (
    <Icon name='CloseSquareTwotone' {...{ ...props, ...context.attrs }} icon={CloseSquareTwotoneSvg} />
);

IconCloseSquareTwotone.displayName = 'IconCloseSquareTwotone';
IconCloseSquareTwotone.theme = 'twotone';
IconCloseSquareTwotone.originName = 'close-square';

export default IconCloseSquareTwotone;
