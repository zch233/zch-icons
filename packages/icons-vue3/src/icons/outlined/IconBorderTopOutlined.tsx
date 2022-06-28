// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BorderTopOutlinedSvg from 'gupo-icons-base/es/asn/BorderTopOutlined';

export interface BorderTopOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBorderTopOutlined: BorderTopOutlinedIconType = (props, context) => (
    <Icon name='BorderTopOutlined' {...{ ...props, ...context.attrs }} icon={BorderTopOutlinedSvg} />
);

IconBorderTopOutlined.displayName = 'IconBorderTopOutlined';
IconBorderTopOutlined.theme = 'outlined';
IconBorderTopOutlined.originName = 'border-top';

export default IconBorderTopOutlined;
