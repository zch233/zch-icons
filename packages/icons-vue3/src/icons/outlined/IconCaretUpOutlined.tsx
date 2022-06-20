// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CaretUpOutlinedSvg from 'icon-base/es/asn/CaretUpOutlined';

export interface CaretUpOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCaretUpOutlined: CaretUpOutlinedIconType = (props, context) => (
    <Icon name='CaretUpOutlined' {...{ ...props, ...context.attrs }} icon={CaretUpOutlinedSvg} />
);

IconCaretUpOutlined.displayName = 'IconCaretUpOutlined';

export default IconCaretUpOutlined;
