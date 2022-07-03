// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EuroCircleTwotoneSvg from 'icons-base/es/asn/EuroCircleTwotone';

export interface EuroCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconEuroCircleTwotone: EuroCircleTwotoneIconType = (props, context) => (
    <Icon name='EuroCircleTwotone' {...{ ...props, ...context.attrs }} icon={EuroCircleTwotoneSvg} />
);

IconEuroCircleTwotone.displayName = 'IconEuroCircleTwotone';
IconEuroCircleTwotone.theme = 'twotone';
IconEuroCircleTwotone.originName = 'euro-circle';

export default IconEuroCircleTwotone;
