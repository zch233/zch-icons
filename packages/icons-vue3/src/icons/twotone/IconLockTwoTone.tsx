// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LockTwotoneSvg from 'icons-base/es/asn/LockTwotone';

export interface LockTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLockTwotone: LockTwotoneIconType = (props, context) => <Icon name='LockTwotone' {...{ ...props, ...context.attrs }} icon={LockTwotoneSvg} />;

IconLockTwotone.displayName = 'IconLockTwotone';
IconLockTwotone.theme = 'twotone';
IconLockTwotone.originName = 'lock';

export default IconLockTwotone;
