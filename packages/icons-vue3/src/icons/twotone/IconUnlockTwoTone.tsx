// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UnlockTwoToneSvg from 'icon-base/es/asn/UnlockTwoTone';

export interface UnlockTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconUnlockTwoTone: UnlockTwoToneIconType = (props, context) => <Icon name='UnlockTwoTone' {...{ ...props, ...context.attrs }} icon={UnlockTwoToneSvg} />;

IconUnlockTwoTone.displayName = 'IconUnlockTwoTone';

export default IconUnlockTwoTone;
