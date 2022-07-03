// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UnderlineOutlinedSvg from 'icons-base/es/asn/UnderlineOutlined';

export interface UnderlineOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUnderlineOutlined: UnderlineOutlinedIconType = (props, context) => (
    <Icon name='UnderlineOutlined' {...{ ...props, ...context.attrs }} icon={UnderlineOutlinedSvg} />
);

IconUnderlineOutlined.displayName = 'IconUnderlineOutlined';
IconUnderlineOutlined.theme = 'outlined';
IconUnderlineOutlined.originName = 'underline';

export default IconUnderlineOutlined;
