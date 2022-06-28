// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MobileFilledSvg from 'gupo-icons-base/es/asn/MobileFilled';

export interface MobileFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMobileFilled: MobileFilledIconType = (props, context) => <Icon name='MobileFilled' {...{ ...props, ...context.attrs }} icon={MobileFilledSvg} />;

IconMobileFilled.displayName = 'IconMobileFilled';
IconMobileFilled.theme = 'filled';
IconMobileFilled.originName = 'mobile';

export default IconMobileFilled;
