// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MenuOutlinedSvg from 'icon-base/es/asn/MenuOutlined';

export interface MenuOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMenuOutlined: MenuOutlinedIconType = (props, context) => <Icon name='MenuOutlined' {...{ ...props, ...context.attrs }} icon={MenuOutlinedSvg} />;

IconMenuOutlined.displayName = 'IconMenuOutlined';

export default IconMenuOutlined;
