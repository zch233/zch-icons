// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ToTopOutlinedSvg from 'icon-base/es/asn/ToTopOutlined';

export interface ToTopOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconToTopOutlined: ToTopOutlinedIconType = (props, context) => <Icon name='ToTopOutlined' {...{ ...props, ...context.attrs }} icon={ToTopOutlinedSvg} />;

IconToTopOutlined.displayName = 'IconToTopOutlined';

export default IconToTopOutlined;
