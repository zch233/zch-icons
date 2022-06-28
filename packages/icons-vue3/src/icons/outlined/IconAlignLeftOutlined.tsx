// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AlignLeftOutlinedSvg from 'gupo-icons-base/es/asn/AlignLeftOutlined';

export interface AlignLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAlignLeftOutlined: AlignLeftOutlinedIconType = (props, context) => (
    <Icon name='AlignLeftOutlined' {...{ ...props, ...context.attrs }} icon={AlignLeftOutlinedSvg} />
);

IconAlignLeftOutlined.displayName = 'IconAlignLeftOutlined';
IconAlignLeftOutlined.theme = 'outlined';
IconAlignLeftOutlined.originName = 'align-left';

export default IconAlignLeftOutlined;
