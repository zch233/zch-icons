// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExpandAltOutlinedSvg from 'icon-base/es/asn/ExpandAltOutlined';

export interface ExpandAltOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconExpandAltOutlined: ExpandAltOutlinedIconType = (props, context) => (
    <Icon name='ExpandAltOutlined' {...{ ...props, ...context.attrs }} icon={ExpandAltOutlinedSvg} />
);

IconExpandAltOutlined.displayName = 'IconExpandAltOutlined';

export default IconExpandAltOutlined;
