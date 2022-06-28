// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BorderInnerOutlinedSvg from 'gupo-icons-base/es/asn/BorderInnerOutlined';

export interface BorderInnerOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBorderInnerOutlined: BorderInnerOutlinedIconType = (props, context) => (
    <Icon name='BorderInnerOutlined' {...{ ...props, ...context.attrs }} icon={BorderInnerOutlinedSvg} />
);

IconBorderInnerOutlined.displayName = 'IconBorderInnerOutlined';
IconBorderInnerOutlined.theme = 'outlined';
IconBorderInnerOutlined.originName = 'border-inner';

export default IconBorderInnerOutlined;
