// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CaretRightFilledSvg from 'gupo-icons-base/es/asn/CaretRightFilled';

export interface CaretRightFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCaretRightFilled: CaretRightFilledIconType = (props, context) => (
    <Icon name='CaretRightFilled' {...{ ...props, ...context.attrs }} icon={CaretRightFilledSvg} />
);

IconCaretRightFilled.displayName = 'IconCaretRightFilled';
IconCaretRightFilled.theme = 'filled';
IconCaretRightFilled.originName = 'caret-right';

export default IconCaretRightFilled;
