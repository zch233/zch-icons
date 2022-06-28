// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MenuUnfoldOutlinedSvg from 'gupo-icons-base/es/asn/MenuUnfoldOutlined';

export interface MenuUnfoldOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMenuUnfoldOutlined: MenuUnfoldOutlinedIconType = (props, context) => (
    <Icon name='MenuUnfoldOutlined' {...{ ...props, ...context.attrs }} icon={MenuUnfoldOutlinedSvg} />
);

IconMenuUnfoldOutlined.displayName = 'IconMenuUnfoldOutlined';
IconMenuUnfoldOutlined.theme = 'outlined';
IconMenuUnfoldOutlined.originName = 'menu-unfold';

export default IconMenuUnfoldOutlined;
