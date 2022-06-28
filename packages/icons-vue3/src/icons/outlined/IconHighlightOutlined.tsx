// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HighlightOutlinedSvg from 'gupo-icons-base/es/asn/HighlightOutlined';

export interface HighlightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHighlightOutlined: HighlightOutlinedIconType = (props, context) => (
    <Icon name='HighlightOutlined' {...{ ...props, ...context.attrs }} icon={HighlightOutlinedSvg} />
);

IconHighlightOutlined.displayName = 'IconHighlightOutlined';
IconHighlightOutlined.theme = 'outlined';
IconHighlightOutlined.originName = 'highlight';

export default IconHighlightOutlined;
