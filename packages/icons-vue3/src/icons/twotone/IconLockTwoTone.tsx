// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LockTwoToneSvg from 'icon-base/es/asn/LockTwoTone';

export interface LockTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLockTwoTone: LockTwoToneIconType = (props, context) => <Icon name='LockTwoTone' {...{ ...props, ...context.attrs }} icon={LockTwoToneSvg} />;

IconLockTwoTone.displayName = 'IconLockTwoTone';

export default IconLockTwoTone;
