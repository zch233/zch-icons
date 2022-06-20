// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ControlOutlinedSvg from 'icon-base/es/asn/ControlOutlined';

export interface ControlOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconControlOutlined: ControlOutlinedIconType = (props, context) => (
    <Icon name='ControlOutlined' {...{ ...props, ...context.attrs }} icon={ControlOutlinedSvg} />
);

IconControlOutlined.displayName = 'IconControlOutlined';

export default IconControlOutlined;
