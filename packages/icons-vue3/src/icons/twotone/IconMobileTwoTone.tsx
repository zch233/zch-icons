// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MobileTwotoneSvg from 'gupo-icons-base/es/asn/MobileTwotone';

export interface MobileTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMobileTwotone: MobileTwotoneIconType = (props, context) => <Icon name='MobileTwotone' {...{ ...props, ...context.attrs }} icon={MobileTwotoneSvg} />;

IconMobileTwotone.displayName = 'IconMobileTwotone';
IconMobileTwotone.theme = 'twotone';
IconMobileTwotone.originName = 'mobile';

export default IconMobileTwotone;
