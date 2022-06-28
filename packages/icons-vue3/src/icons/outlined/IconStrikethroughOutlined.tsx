// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StrikethroughOutlinedSvg from 'gupo-icons-base/es/asn/StrikethroughOutlined';

export interface StrikethroughOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconStrikethroughOutlined: StrikethroughOutlinedIconType = (props, context) => (
    <Icon name='StrikethroughOutlined' {...{ ...props, ...context.attrs }} icon={StrikethroughOutlinedSvg} />
);

IconStrikethroughOutlined.displayName = 'IconStrikethroughOutlined';
IconStrikethroughOutlined.theme = 'outlined';
IconStrikethroughOutlined.originName = 'strikethrough';

export default IconStrikethroughOutlined;
