// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ClearOutlinedSvg from 'icons-base/es/asn/ClearOutlined';

export interface ClearOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconClearOutlined: ClearOutlinedIconType = (props, context) => <Icon name='ClearOutlined' {...{ ...props, ...context.attrs }} icon={ClearOutlinedSvg} />;

IconClearOutlined.displayName = 'IconClearOutlined';
IconClearOutlined.theme = 'outlined';
IconClearOutlined.originName = 'clear';

export default IconClearOutlined;
