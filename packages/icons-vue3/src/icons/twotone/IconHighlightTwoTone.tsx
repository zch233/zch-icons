// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HighlightTwotoneSvg from 'gupo-icons-base/es/asn/HighlightTwotone';

export interface HighlightTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHighlightTwotone: HighlightTwotoneIconType = (props, context) => (
    <Icon name='HighlightTwotone' {...{ ...props, ...context.attrs }} icon={HighlightTwotoneSvg} />
);

IconHighlightTwotone.displayName = 'IconHighlightTwotone';
IconHighlightTwotone.theme = 'twotone';
IconHighlightTwotone.originName = 'highlight';

export default IconHighlightTwotone;
