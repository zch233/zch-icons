// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import VerticalAlignMiddleOutlinedSvg from 'icon-base/es/asn/VerticalAlignMiddleOutlined';

export interface VerticalAlignMiddleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconVerticalAlignMiddleOutlined: VerticalAlignMiddleOutlinedIconType = (props, context) => (
    <Icon name='VerticalAlignMiddleOutlined' {...{ ...props, ...context.attrs }} icon={VerticalAlignMiddleOutlinedSvg} />
);

IconVerticalAlignMiddleOutlined.displayName = 'IconVerticalAlignMiddleOutlined';

export default IconVerticalAlignMiddleOutlined;
