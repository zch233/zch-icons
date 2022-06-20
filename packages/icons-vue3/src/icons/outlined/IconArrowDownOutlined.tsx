// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ArrowDownOutlinedSvg from 'icon-base/es/asn/ArrowDownOutlined';

export interface ArrowDownOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconArrowDownOutlined: ArrowDownOutlinedIconType = (props, context) => (
    <Icon name='ArrowDownOutlined' {...{ ...props, ...context.attrs }} icon={ArrowDownOutlinedSvg} />
);

IconArrowDownOutlined.displayName = 'IconArrowDownOutlined';

export default IconArrowDownOutlined;
