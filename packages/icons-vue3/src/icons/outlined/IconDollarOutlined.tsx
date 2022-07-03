// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DollarOutlinedSvg from 'icons-base/es/asn/DollarOutlined';

export interface DollarOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDollarOutlined: DollarOutlinedIconType = (props, context) => (
    <Icon name='DollarOutlined' {...{ ...props, ...context.attrs }} icon={DollarOutlinedSvg} />
);

IconDollarOutlined.displayName = 'IconDollarOutlined';
IconDollarOutlined.theme = 'outlined';
IconDollarOutlined.originName = 'dollar';

export default IconDollarOutlined;
