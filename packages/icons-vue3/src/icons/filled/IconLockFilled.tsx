// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LockFilledSvg from 'gupo-icons-base/es/asn/LockFilled';

export interface LockFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLockFilled: LockFilledIconType = (props, context) => <Icon name='LockFilled' {...{ ...props, ...context.attrs }} icon={LockFilledSvg} />;

IconLockFilled.displayName = 'IconLockFilled';
IconLockFilled.theme = 'filled';
IconLockFilled.originName = 'lock';

export default IconLockFilled;
