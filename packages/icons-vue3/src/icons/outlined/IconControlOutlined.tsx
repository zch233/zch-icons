// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ControlOutlinedSvg from 'gupo-icons-base/es/asn/ControlOutlined';

export interface ControlOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconControlOutlined: ControlOutlinedIconType = (props, context) => (
    <Icon name='ControlOutlined' {...{ ...props, ...context.attrs }} icon={ControlOutlinedSvg} />
);

IconControlOutlined.displayName = 'IconControlOutlined';
IconControlOutlined.theme = 'outlined';
IconControlOutlined.originName = 'control';

export default IconControlOutlined;
