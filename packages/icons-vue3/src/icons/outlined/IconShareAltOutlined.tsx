// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ShareAltOutlinedSvg from 'icon-base/es/asn/ShareAltOutlined';

export interface ShareAltOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconShareAltOutlined: ShareAltOutlinedIconType = (props, context) => (
    <Icon name='ShareAltOutlined' {...{ ...props, ...context.attrs }} icon={ShareAltOutlinedSvg} />
);

IconShareAltOutlined.displayName = 'IconShareAltOutlined';

export default IconShareAltOutlined;
