// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AimOutlinedSvg from 'gupo-icons-base/es/asn/AimOutlined';

export interface AimOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAimOutlined: AimOutlinedIconType = (props, context) => <Icon name='AimOutlined' {...{ ...props, ...context.attrs }} icon={AimOutlinedSvg} />;

IconAimOutlined.displayName = 'IconAimOutlined';
IconAimOutlined.theme = 'outlined';
IconAimOutlined.originName = 'aim';

export default IconAimOutlined;
