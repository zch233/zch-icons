// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CaretRightOutlinedSvg from 'icons-base/es/asn/CaretRightOutlined';

export interface CaretRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCaretRightOutlined: CaretRightOutlinedIconType = (props, context) => (
    <Icon name='CaretRightOutlined' {...{ ...props, ...context.attrs }} icon={CaretRightOutlinedSvg} />
);

IconCaretRightOutlined.displayName = 'IconCaretRightOutlined';
IconCaretRightOutlined.theme = 'outlined';
IconCaretRightOutlined.originName = 'caret-right';

export default IconCaretRightOutlined;
