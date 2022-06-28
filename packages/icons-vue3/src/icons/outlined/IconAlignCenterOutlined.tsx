// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AlignCenterOutlinedSvg from 'gupo-icons-base/es/asn/AlignCenterOutlined';

export interface AlignCenterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAlignCenterOutlined: AlignCenterOutlinedIconType = (props, context) => (
    <Icon name='AlignCenterOutlined' {...{ ...props, ...context.attrs }} icon={AlignCenterOutlinedSvg} />
);

IconAlignCenterOutlined.displayName = 'IconAlignCenterOutlined';
IconAlignCenterOutlined.theme = 'outlined';
IconAlignCenterOutlined.originName = 'align-center';

export default IconAlignCenterOutlined;
