// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FormatPainterOutlinedSvg from 'icons-base/es/asn/FormatPainterOutlined';

export interface FormatPainterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFormatPainterOutlined: FormatPainterOutlinedIconType = (props, context) => (
    <Icon name='FormatPainterOutlined' {...{ ...props, ...context.attrs }} icon={FormatPainterOutlinedSvg} />
);

IconFormatPainterOutlined.displayName = 'IconFormatPainterOutlined';
IconFormatPainterOutlined.theme = 'outlined';
IconFormatPainterOutlined.originName = 'format-painter';

export default IconFormatPainterOutlined;
