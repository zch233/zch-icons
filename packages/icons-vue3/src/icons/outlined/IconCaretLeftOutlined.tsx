// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CaretLeftOutlinedSvg from 'icons-base/es/asn/CaretLeftOutlined';

export interface CaretLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCaretLeftOutlined: CaretLeftOutlinedIconType = (props, context) => (
    <Icon name='CaretLeftOutlined' {...{ ...props, ...context.attrs }} icon={CaretLeftOutlinedSvg} />
);

IconCaretLeftOutlined.displayName = 'IconCaretLeftOutlined';
IconCaretLeftOutlined.theme = 'outlined';
IconCaretLeftOutlined.originName = 'caret-left';

export default IconCaretLeftOutlined;
