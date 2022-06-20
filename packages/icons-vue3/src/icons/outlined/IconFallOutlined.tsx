// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FallOutlinedSvg from 'icon-base/es/asn/FallOutlined';

export interface FallOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFallOutlined: FallOutlinedIconType = (props, context) => <Icon name='FallOutlined' {...{ ...props, ...context.attrs }} icon={FallOutlinedSvg} />;

IconFallOutlined.displayName = 'IconFallOutlined';

export default IconFallOutlined;
