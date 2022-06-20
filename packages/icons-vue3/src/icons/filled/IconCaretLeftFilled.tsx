// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CaretLeftFilledSvg from 'icon-base/es/asn/CaretLeftFilled';

export interface CaretLeftFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCaretLeftFilled: CaretLeftFilledIconType = (props, context) => (
    <Icon name='CaretLeftFilled' {...{ ...props, ...context.attrs }} icon={CaretLeftFilledSvg} />
);

IconCaretLeftFilled.displayName = 'IconCaretLeftFilled';

export default IconCaretLeftFilled;
