// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HeartTwoToneSvg from 'icon-base/es/asn/HeartTwoTone';

export interface HeartTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconHeartTwoTone: HeartTwoToneIconType = (props, context) => <Icon name='HeartTwoTone' {...{ ...props, ...context.attrs }} icon={HeartTwoToneSvg} />;

IconHeartTwoTone.displayName = 'IconHeartTwoTone';

export default IconHeartTwoTone;
