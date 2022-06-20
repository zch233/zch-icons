// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HighlightTwoToneSvg from 'icon-base/es/asn/HighlightTwoTone';

export interface HighlightTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconHighlightTwoTone: HighlightTwoToneIconType = (props, context) => (
    <Icon name='HighlightTwoTone' {...{ ...props, ...context.attrs }} icon={HighlightTwoToneSvg} />
);

IconHighlightTwoTone.displayName = 'IconHighlightTwoTone';

export default IconHighlightTwoTone;
