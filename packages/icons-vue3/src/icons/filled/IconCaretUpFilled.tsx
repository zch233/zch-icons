// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CaretUpFilledSvg from 'gupo-icons-base/es/asn/CaretUpFilled';

export interface CaretUpFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCaretUpFilled: CaretUpFilledIconType = (props, context) => <Icon name='CaretUpFilled' {...{ ...props, ...context.attrs }} icon={CaretUpFilledSvg} />;

IconCaretUpFilled.displayName = 'IconCaretUpFilled';
IconCaretUpFilled.theme = 'filled';
IconCaretUpFilled.originName = 'caret-up';

export default IconCaretUpFilled;
