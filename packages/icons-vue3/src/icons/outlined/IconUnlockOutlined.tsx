// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UnlockOutlinedSvg from 'icon-base/es/asn/UnlockOutlined';

export interface UnlockOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconUnlockOutlined: UnlockOutlinedIconType = (props, context) => (
    <Icon name='UnlockOutlined' {...{ ...props, ...context.attrs }} icon={UnlockOutlinedSvg} />
);

IconUnlockOutlined.displayName = 'IconUnlockOutlined';

export default IconUnlockOutlined;
