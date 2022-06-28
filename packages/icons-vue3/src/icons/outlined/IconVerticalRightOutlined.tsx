// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import VerticalRightOutlinedSvg from 'gupo-icons-base/es/asn/VerticalRightOutlined';

export interface VerticalRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconVerticalRightOutlined: VerticalRightOutlinedIconType = (props, context) => (
    <Icon name='VerticalRightOutlined' {...{ ...props, ...context.attrs }} icon={VerticalRightOutlinedSvg} />
);

IconVerticalRightOutlined.displayName = 'IconVerticalRightOutlined';
IconVerticalRightOutlined.theme = 'outlined';
IconVerticalRightOutlined.originName = 'vertical-right';

export default IconVerticalRightOutlined;
