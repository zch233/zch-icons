// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ArrowUpOutlinedSvg from 'gupo-icons-base/es/asn/ArrowUpOutlined';

export interface ArrowUpOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconArrowUpOutlined: ArrowUpOutlinedIconType = (props, context) => (
    <Icon name='ArrowUpOutlined' {...{ ...props, ...context.attrs }} icon={ArrowUpOutlinedSvg} />
);

IconArrowUpOutlined.displayName = 'IconArrowUpOutlined';
IconArrowUpOutlined.theme = 'outlined';
IconArrowUpOutlined.originName = 'arrow-up';

export default IconArrowUpOutlined;
