// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ArrowDownOutlinedSvg from 'icons-base/es/asn/ArrowDownOutlined';

export interface ArrowDownOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconArrowDownOutlined: ArrowDownOutlinedIconType = (props, context) => (
    <Icon name='ArrowDownOutlined' {...{ ...props, ...context.attrs }} icon={ArrowDownOutlinedSvg} />
);

IconArrowDownOutlined.displayName = 'IconArrowDownOutlined';
IconArrowDownOutlined.theme = 'outlined';
IconArrowDownOutlined.originName = 'arrow-down';

export default IconArrowDownOutlined;
