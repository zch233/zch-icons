// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AimOutlinedSvg from 'icon-base/es/asn/AimOutlined';

export interface AimOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAimOutlined: AimOutlinedIconType = (props, context) => <Icon name='AimOutlined' {...{ ...props, ...context.attrs }} icon={AimOutlinedSvg} />;

IconAimOutlined.displayName = 'IconAimOutlined';

export default IconAimOutlined;
