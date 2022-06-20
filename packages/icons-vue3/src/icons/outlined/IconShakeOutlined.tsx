// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ShakeOutlinedSvg from 'icon-base/es/asn/ShakeOutlined';

export interface ShakeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconShakeOutlined: ShakeOutlinedIconType = (props, context) => <Icon name='ShakeOutlined' {...{ ...props, ...context.attrs }} icon={ShakeOutlinedSvg} />;

IconShakeOutlined.displayName = 'IconShakeOutlined';

export default IconShakeOutlined;
