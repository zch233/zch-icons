// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CheckSquareTwotoneSvg from 'icons-base/es/asn/CheckSquareTwotone';

export interface CheckSquareTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCheckSquareTwotone: CheckSquareTwotoneIconType = (props, context) => (
    <Icon name='CheckSquareTwotone' {...{ ...props, ...context.attrs }} icon={CheckSquareTwotoneSvg} />
);

IconCheckSquareTwotone.displayName = 'IconCheckSquareTwotone';
IconCheckSquareTwotone.theme = 'twotone';
IconCheckSquareTwotone.originName = 'check-square';

export default IconCheckSquareTwotone;
