// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EuroTwotoneSvg from 'icons-base/es/asn/EuroTwotone';

export interface EuroTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconEuroTwotone: EuroTwotoneIconType = (props, context) => <Icon name='EuroTwotone' {...{ ...props, ...context.attrs }} icon={EuroTwotoneSvg} />;

IconEuroTwotone.displayName = 'IconEuroTwotone';
IconEuroTwotone.theme = 'twotone';
IconEuroTwotone.originName = 'euro';

export default IconEuroTwotone;
