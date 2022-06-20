// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HighlightFilledSvg from 'icon-base/es/asn/HighlightFilled';

export interface HighlightFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconHighlightFilled: HighlightFilledIconType = (props, context) => (
    <Icon name='HighlightFilled' {...{ ...props, ...context.attrs }} icon={HighlightFilledSvg} />
);

IconHighlightFilled.displayName = 'IconHighlightFilled';

export default IconHighlightFilled;
