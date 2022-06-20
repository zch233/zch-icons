// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BorderlessTableOutlinedSvg from 'icon-base/es/asn/BorderlessTableOutlined';

export interface BorderlessTableOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBorderlessTableOutlined: BorderlessTableOutlinedIconType = (props, context) => (
    <Icon name='BorderlessTableOutlined' {...{ ...props, ...context.attrs }} icon={BorderlessTableOutlinedSvg} />
);

IconBorderlessTableOutlined.displayName = 'IconBorderlessTableOutlined';

export default IconBorderlessTableOutlined;
