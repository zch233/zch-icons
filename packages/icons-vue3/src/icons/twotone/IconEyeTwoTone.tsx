// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EyeTwotoneSvg from 'icons-base/es/asn/EyeTwotone';

export interface EyeTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconEyeTwotone: EyeTwotoneIconType = (props, context) => <Icon name='EyeTwotone' {...{ ...props, ...context.attrs }} icon={EyeTwotoneSvg} />;

IconEyeTwotone.displayName = 'IconEyeTwotone';
IconEyeTwotone.theme = 'twotone';
IconEyeTwotone.originName = 'eye';

export default IconEyeTwotone;
