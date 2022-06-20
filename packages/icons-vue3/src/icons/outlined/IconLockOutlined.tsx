// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LockOutlinedSvg from 'icon-base/es/asn/LockOutlined';

export interface LockOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLockOutlined: LockOutlinedIconType = (props, context) => <Icon name='LockOutlined' {...{ ...props, ...context.attrs }} icon={LockOutlinedSvg} />;

IconLockOutlined.displayName = 'IconLockOutlined';

export default IconLockOutlined;
