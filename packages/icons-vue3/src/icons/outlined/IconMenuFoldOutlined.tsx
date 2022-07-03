// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MenuFoldOutlinedSvg from 'icons-base/es/asn/MenuFoldOutlined';

export interface MenuFoldOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMenuFoldOutlined: MenuFoldOutlinedIconType = (props, context) => (
    <Icon name='MenuFoldOutlined' {...{ ...props, ...context.attrs }} icon={MenuFoldOutlinedSvg} />
);

IconMenuFoldOutlined.displayName = 'IconMenuFoldOutlined';
IconMenuFoldOutlined.theme = 'outlined';
IconMenuFoldOutlined.originName = 'menu-fold';

export default IconMenuFoldOutlined;
