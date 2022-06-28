// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlusCircleTwotoneSvg from 'gupo-icons-base/es/asn/PlusCircleTwotone';

export interface PlusCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPlusCircleTwotone: PlusCircleTwotoneIconType = (props, context) => (
    <Icon name='PlusCircleTwotone' {...{ ...props, ...context.attrs }} icon={PlusCircleTwotoneSvg} />
);

IconPlusCircleTwotone.displayName = 'IconPlusCircleTwotone';
IconPlusCircleTwotone.theme = 'twotone';
IconPlusCircleTwotone.originName = 'plus-circle';

export default IconPlusCircleTwotone;
