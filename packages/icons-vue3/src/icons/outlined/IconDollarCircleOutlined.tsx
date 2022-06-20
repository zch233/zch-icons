// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DollarCircleOutlinedSvg from 'icon-base/es/asn/DollarCircleOutlined';

export interface DollarCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDollarCircleOutlined: DollarCircleOutlinedIconType = (props, context) => (
    <Icon name='DollarCircleOutlined' {...{ ...props, ...context.attrs }} icon={DollarCircleOutlinedSvg} />
);

IconDollarCircleOutlined.displayName = 'IconDollarCircleOutlined';

export default IconDollarCircleOutlined;
