// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AlignRightOutlinedSvg from 'icons-base/es/asn/AlignRightOutlined';

export interface AlignRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAlignRightOutlined: AlignRightOutlinedIconType = (props, context) => (
    <Icon name='AlignRightOutlined' {...{ ...props, ...context.attrs }} icon={AlignRightOutlinedSvg} />
);

IconAlignRightOutlined.displayName = 'IconAlignRightOutlined';
IconAlignRightOutlined.theme = 'outlined';
IconAlignRightOutlined.originName = 'align-right';

export default IconAlignRightOutlined;
