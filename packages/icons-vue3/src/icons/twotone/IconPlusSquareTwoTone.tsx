// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlusSquareTwotoneSvg from 'gupo-icons-base/es/asn/PlusSquareTwotone';

export interface PlusSquareTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPlusSquareTwotone: PlusSquareTwotoneIconType = (props, context) => (
    <Icon name='PlusSquareTwotone' {...{ ...props, ...context.attrs }} icon={PlusSquareTwotoneSvg} />
);

IconPlusSquareTwotone.displayName = 'IconPlusSquareTwotone';
IconPlusSquareTwotone.theme = 'twotone';
IconPlusSquareTwotone.originName = 'plus-square';

export default IconPlusSquareTwotone;
