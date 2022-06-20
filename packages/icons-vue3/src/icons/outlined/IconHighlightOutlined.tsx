// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HighlightOutlinedSvg from 'icon-base/es/asn/HighlightOutlined';

export interface HighlightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconHighlightOutlined: HighlightOutlinedIconType = (props, context) => (
    <Icon name='HighlightOutlined' {...{ ...props, ...context.attrs }} icon={HighlightOutlinedSvg} />
);

IconHighlightOutlined.displayName = 'IconHighlightOutlined';

export default IconHighlightOutlined;
