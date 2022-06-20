// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MenuFoldOutlinedSvg from 'icon-base/es/asn/MenuFoldOutlined';

export interface MenuFoldOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMenuFoldOutlined: MenuFoldOutlinedIconType = (props, context) => (
    <Icon name='MenuFoldOutlined' {...{ ...props, ...context.attrs }} icon={MenuFoldOutlinedSvg} />
);

IconMenuFoldOutlined.displayName = 'IconMenuFoldOutlined';

export default IconMenuFoldOutlined;
