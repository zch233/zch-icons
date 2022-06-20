// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CaretRightFilledSvg from 'icon-base/es/asn/CaretRightFilled';

export interface CaretRightFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCaretRightFilled: CaretRightFilledIconType = (props, context) => (
    <Icon name='CaretRightFilled' {...{ ...props, ...context.attrs }} icon={CaretRightFilledSvg} />
);

IconCaretRightFilled.displayName = 'IconCaretRightFilled';

export default IconCaretRightFilled;
