// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CaretUpOutlinedSvg from 'gupo-icons-base/es/asn/CaretUpOutlined';

export interface CaretUpOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCaretUpOutlined: CaretUpOutlinedIconType = (props, context) => (
    <Icon name='CaretUpOutlined' {...{ ...props, ...context.attrs }} icon={CaretUpOutlinedSvg} />
);

IconCaretUpOutlined.displayName = 'IconCaretUpOutlined';
IconCaretUpOutlined.theme = 'outlined';
IconCaretUpOutlined.originName = 'caret-up';

export default IconCaretUpOutlined;
