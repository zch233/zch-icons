// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HolderOutlinedSvg from 'gupo-icons-base/es/asn/HolderOutlined';

export interface HolderOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHolderOutlined: HolderOutlinedIconType = (props, context) => (
    <Icon name='HolderOutlined' {...{ ...props, ...context.attrs }} icon={HolderOutlinedSvg} />
);

IconHolderOutlined.displayName = 'IconHolderOutlined';
IconHolderOutlined.theme = 'outlined';
IconHolderOutlined.originName = 'holder';

export default IconHolderOutlined;
