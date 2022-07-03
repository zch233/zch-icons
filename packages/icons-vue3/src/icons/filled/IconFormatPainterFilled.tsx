// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FormatPainterFilledSvg from 'icons-base/es/asn/FormatPainterFilled';

export interface FormatPainterFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFormatPainterFilled: FormatPainterFilledIconType = (props, context) => (
    <Icon name='FormatPainterFilled' {...{ ...props, ...context.attrs }} icon={FormatPainterFilledSvg} />
);

IconFormatPainterFilled.displayName = 'IconFormatPainterFilled';
IconFormatPainterFilled.theme = 'filled';
IconFormatPainterFilled.originName = 'format-painter';

export default IconFormatPainterFilled;
