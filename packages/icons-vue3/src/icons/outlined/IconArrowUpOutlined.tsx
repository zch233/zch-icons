// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ArrowUpOutlinedSvg from 'icon-base/es/asn/ArrowUpOutlined';

export interface ArrowUpOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconArrowUpOutlined: ArrowUpOutlinedIconType = (props, context) => (
    <Icon name='ArrowUpOutlined' {...{ ...props, ...context.attrs }} icon={ArrowUpOutlinedSvg} />
);

IconArrowUpOutlined.displayName = 'IconArrowUpOutlined';

export default IconArrowUpOutlined;
