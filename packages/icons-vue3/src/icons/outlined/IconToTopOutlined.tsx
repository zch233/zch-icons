// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ToTopOutlinedSvg from 'icons-base/es/asn/ToTopOutlined';

export interface ToTopOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconToTopOutlined: ToTopOutlinedIconType = (props, context) => <Icon name='ToTopOutlined' {...{ ...props, ...context.attrs }} icon={ToTopOutlinedSvg} />;

IconToTopOutlined.displayName = 'IconToTopOutlined';
IconToTopOutlined.theme = 'outlined';
IconToTopOutlined.originName = 'to-top';

export default IconToTopOutlined;
