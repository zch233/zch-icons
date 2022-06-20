// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HolderOutlinedSvg from 'icon-base/es/asn/HolderOutlined';

export interface HolderOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconHolderOutlined: HolderOutlinedIconType = (props, context) => (
    <Icon name='HolderOutlined' {...{ ...props, ...context.attrs }} icon={HolderOutlinedSvg} />
);

IconHolderOutlined.displayName = 'IconHolderOutlined';

export default IconHolderOutlined;
