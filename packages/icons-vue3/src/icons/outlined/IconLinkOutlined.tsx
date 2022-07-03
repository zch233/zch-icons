// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LinkOutlinedSvg from 'icons-base/es/asn/LinkOutlined';

export interface LinkOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLinkOutlined: LinkOutlinedIconType = (props, context) => <Icon name='LinkOutlined' {...{ ...props, ...context.attrs }} icon={LinkOutlinedSvg} />;

IconLinkOutlined.displayName = 'IconLinkOutlined';
IconLinkOutlined.theme = 'outlined';
IconLinkOutlined.originName = 'link';

export default IconLinkOutlined;
