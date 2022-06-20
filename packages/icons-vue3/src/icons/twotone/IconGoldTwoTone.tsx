// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GoldTwoToneSvg from 'icon-base/es/asn/GoldTwoTone';

export interface GoldTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGoldTwoTone: GoldTwoToneIconType = (props, context) => <Icon name='GoldTwoTone' {...{ ...props, ...context.attrs }} icon={GoldTwoToneSvg} />;

IconGoldTwoTone.displayName = 'IconGoldTwoTone';

export default IconGoldTwoTone;
