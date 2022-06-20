// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BorderInnerOutlinedSvg from 'icon-base/es/asn/BorderInnerOutlined';

export interface BorderInnerOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBorderInnerOutlined: BorderInnerOutlinedIconType = (props, context) => (
    <Icon name='BorderInnerOutlined' {...{ ...props, ...context.attrs }} icon={BorderInnerOutlinedSvg} />
);

IconBorderInnerOutlined.displayName = 'IconBorderInnerOutlined';

export default IconBorderInnerOutlined;
