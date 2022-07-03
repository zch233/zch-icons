// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExpandAltOutlinedSvg from 'icons-base/es/asn/ExpandAltOutlined';

export interface ExpandAltOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconExpandAltOutlined: ExpandAltOutlinedIconType = (props, context) => (
    <Icon name='ExpandAltOutlined' {...{ ...props, ...context.attrs }} icon={ExpandAltOutlinedSvg} />
);

IconExpandAltOutlined.displayName = 'IconExpandAltOutlined';
IconExpandAltOutlined.theme = 'outlined';
IconExpandAltOutlined.originName = 'expand-alt';

export default IconExpandAltOutlined;
