// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DollarCircleOutlinedSvg from 'gupo-icons-base/es/asn/DollarCircleOutlined';

export interface DollarCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDollarCircleOutlined: DollarCircleOutlinedIconType = (props, context) => (
    <Icon name='DollarCircleOutlined' {...{ ...props, ...context.attrs }} icon={DollarCircleOutlinedSvg} />
);

IconDollarCircleOutlined.displayName = 'IconDollarCircleOutlined';
IconDollarCircleOutlined.theme = 'outlined';
IconDollarCircleOutlined.originName = 'dollar-circle';

export default IconDollarCircleOutlined;
