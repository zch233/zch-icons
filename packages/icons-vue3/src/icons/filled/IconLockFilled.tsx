// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LockFilledSvg from 'icon-base/es/asn/LockFilled';

export interface LockFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLockFilled: LockFilledIconType = (props, context) => <Icon name='LockFilled' {...{ ...props, ...context.attrs }} icon={LockFilledSvg} />;

IconLockFilled.displayName = 'IconLockFilled';

export default IconLockFilled;
