// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BorderTopOutlinedSvg from 'icon-base/es/asn/BorderTopOutlined';

export interface BorderTopOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBorderTopOutlined: BorderTopOutlinedIconType = (props, context) => (
    <Icon name='BorderTopOutlined' {...{ ...props, ...context.attrs }} icon={BorderTopOutlinedSvg} />
);

IconBorderTopOutlined.displayName = 'IconBorderTopOutlined';

export default IconBorderTopOutlined;
