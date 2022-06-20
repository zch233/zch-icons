// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MehTwoToneSvg from 'icon-base/es/asn/MehTwoTone';

export interface MehTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMehTwoTone: MehTwoToneIconType = (props, context) => <Icon name='MehTwoTone' {...{ ...props, ...context.attrs }} icon={MehTwoToneSvg} />;

IconMehTwoTone.displayName = 'IconMehTwoTone';

export default IconMehTwoTone;
