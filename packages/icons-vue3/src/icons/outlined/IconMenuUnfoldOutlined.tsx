// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MenuUnfoldOutlinedSvg from 'icon-base/es/asn/MenuUnfoldOutlined';

export interface MenuUnfoldOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMenuUnfoldOutlined: MenuUnfoldOutlinedIconType = (props, context) => (
    <Icon name='MenuUnfoldOutlined' {...{ ...props, ...context.attrs }} icon={MenuUnfoldOutlinedSvg} />
);

IconMenuUnfoldOutlined.displayName = 'IconMenuUnfoldOutlined';

export default IconMenuUnfoldOutlined;
