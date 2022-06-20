// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BorderHorizontalOutlinedSvg from 'icon-base/es/asn/BorderHorizontalOutlined';

export interface BorderHorizontalOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBorderHorizontalOutlined: BorderHorizontalOutlinedIconType = (props, context) => (
    <Icon name='BorderHorizontalOutlined' {...{ ...props, ...context.attrs }} icon={BorderHorizontalOutlinedSvg} />
);

IconBorderHorizontalOutlined.displayName = 'IconBorderHorizontalOutlined';

export default IconBorderHorizontalOutlined;
