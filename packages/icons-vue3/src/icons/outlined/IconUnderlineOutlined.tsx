// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UnderlineOutlinedSvg from 'icon-base/es/asn/UnderlineOutlined';

export interface UnderlineOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconUnderlineOutlined: UnderlineOutlinedIconType = (props, context) => (
    <Icon name='UnderlineOutlined' {...{ ...props, ...context.attrs }} icon={UnderlineOutlinedSvg} />
);

IconUnderlineOutlined.displayName = 'IconUnderlineOutlined';

export default IconUnderlineOutlined;
