// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import VerticalLeftOutlinedSvg from 'icons-base/es/asn/VerticalLeftOutlined';

export interface VerticalLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconVerticalLeftOutlined: VerticalLeftOutlinedIconType = (props, context) => (
    <Icon name='VerticalLeftOutlined' {...{ ...props, ...context.attrs }} icon={VerticalLeftOutlinedSvg} />
);

IconVerticalLeftOutlined.displayName = 'IconVerticalLeftOutlined';
IconVerticalLeftOutlined.theme = 'outlined';
IconVerticalLeftOutlined.originName = 'vertical-left';

export default IconVerticalLeftOutlined;
