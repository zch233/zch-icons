// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DollarOutlinedSvg from 'icon-base/es/asn/DollarOutlined';

export interface DollarOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDollarOutlined: DollarOutlinedIconType = (props, context) => (
    <Icon name='DollarOutlined' {...{ ...props, ...context.attrs }} icon={DollarOutlinedSvg} />
);

IconDollarOutlined.displayName = 'IconDollarOutlined';

export default IconDollarOutlined;
