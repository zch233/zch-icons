// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ReloadOutlinedSvg from 'gupo-icons-base/es/asn/ReloadOutlined';

export interface ReloadOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconReloadOutlined: ReloadOutlinedIconType = (props, context) => (
    <Icon name='ReloadOutlined' {...{ ...props, ...context.attrs }} icon={ReloadOutlinedSvg} />
);

IconReloadOutlined.displayName = 'IconReloadOutlined';
IconReloadOutlined.theme = 'outlined';
IconReloadOutlined.originName = 'reload';

export default IconReloadOutlined;
