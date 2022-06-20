// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BorderBottomOutlinedSvg from 'icon-base/es/asn/BorderBottomOutlined';

export interface BorderBottomOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBorderBottomOutlined: BorderBottomOutlinedIconType = (props, context) => (
    <Icon name='BorderBottomOutlined' {...{ ...props, ...context.attrs }} icon={BorderBottomOutlinedSvg} />
);

IconBorderBottomOutlined.displayName = 'IconBorderBottomOutlined';

export default IconBorderBottomOutlined;
