// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CheckSquareOutlinedSvg from 'gupo-icons-base/es/asn/CheckSquareOutlined';

export interface CheckSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCheckSquareOutlined: CheckSquareOutlinedIconType = (props, context) => (
    <Icon name='CheckSquareOutlined' {...{ ...props, ...context.attrs }} icon={CheckSquareOutlinedSvg} />
);

IconCheckSquareOutlined.displayName = 'IconCheckSquareOutlined';
IconCheckSquareOutlined.theme = 'outlined';
IconCheckSquareOutlined.originName = 'check-square';

export default IconCheckSquareOutlined;
