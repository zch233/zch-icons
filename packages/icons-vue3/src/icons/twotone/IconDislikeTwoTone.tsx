// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DislikeTwotoneSvg from 'icons-base/es/asn/DislikeTwotone';

export interface DislikeTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDislikeTwotone: DislikeTwotoneIconType = (props, context) => (
    <Icon name='DislikeTwotone' {...{ ...props, ...context.attrs }} icon={DislikeTwotoneSvg} />
);

IconDislikeTwotone.displayName = 'IconDislikeTwotone';
IconDislikeTwotone.theme = 'twotone';
IconDislikeTwotone.originName = 'dislike';

export default IconDislikeTwotone;
