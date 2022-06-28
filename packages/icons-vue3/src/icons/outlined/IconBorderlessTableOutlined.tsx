// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BorderlessTableOutlinedSvg from 'gupo-icons-base/es/asn/BorderlessTableOutlined';

export interface BorderlessTableOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBorderlessTableOutlined: BorderlessTableOutlinedIconType = (props, context) => (
    <Icon name='BorderlessTableOutlined' {...{ ...props, ...context.attrs }} icon={BorderlessTableOutlinedSvg} />
);

IconBorderlessTableOutlined.displayName = 'IconBorderlessTableOutlined';
IconBorderlessTableOutlined.theme = 'outlined';
IconBorderlessTableOutlined.originName = 'borderless-table';

export default IconBorderlessTableOutlined;
