// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UnlockOutlinedSvg from 'icons-base/es/asn/UnlockOutlined';

export interface UnlockOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUnlockOutlined: UnlockOutlinedIconType = (props, context) => (
    <Icon name='UnlockOutlined' {...{ ...props, ...context.attrs }} icon={UnlockOutlinedSvg} />
);

IconUnlockOutlined.displayName = 'IconUnlockOutlined';
IconUnlockOutlined.theme = 'outlined';
IconUnlockOutlined.originName = 'unlock';

export default IconUnlockOutlined;
