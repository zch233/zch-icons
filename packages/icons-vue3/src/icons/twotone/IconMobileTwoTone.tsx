// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MobileTwoToneSvg from 'icon-base/es/asn/MobileTwoTone';

export interface MobileTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMobileTwoTone: MobileTwoToneIconType = (props, context) => <Icon name='MobileTwoTone' {...{ ...props, ...context.attrs }} icon={MobileTwoToneSvg} />;

IconMobileTwoTone.displayName = 'IconMobileTwoTone';

export default IconMobileTwoTone;
