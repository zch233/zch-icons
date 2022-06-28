// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BorderHorizontalOutlinedSvg from 'gupo-icons-base/es/asn/BorderHorizontalOutlined';

export interface BorderHorizontalOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBorderHorizontalOutlined: BorderHorizontalOutlinedIconType = (props, context) => (
    <Icon name='BorderHorizontalOutlined' {...{ ...props, ...context.attrs }} icon={BorderHorizontalOutlinedSvg} />
);

IconBorderHorizontalOutlined.displayName = 'IconBorderHorizontalOutlined';
IconBorderHorizontalOutlined.theme = 'outlined';
IconBorderHorizontalOutlined.originName = 'border-horizontal';

export default IconBorderHorizontalOutlined;
