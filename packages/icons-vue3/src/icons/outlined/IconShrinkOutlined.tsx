// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ShrinkOutlinedSvg from 'icon-base/es/asn/ShrinkOutlined';

export interface ShrinkOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconShrinkOutlined: ShrinkOutlinedIconType = (props, context) => (
    <Icon name='ShrinkOutlined' {...{ ...props, ...context.attrs }} icon={ShrinkOutlinedSvg} />
);

IconShrinkOutlined.displayName = 'IconShrinkOutlined';

export default IconShrinkOutlined;
