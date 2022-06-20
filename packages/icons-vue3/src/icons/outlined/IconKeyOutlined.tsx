// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import KeyOutlinedSvg from 'icon-base/es/asn/KeyOutlined';

export interface KeyOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconKeyOutlined: KeyOutlinedIconType = (props, context) => <Icon name='KeyOutlined' {...{ ...props, ...context.attrs }} icon={KeyOutlinedSvg} />;

IconKeyOutlined.displayName = 'IconKeyOutlined';

export default IconKeyOutlined;
