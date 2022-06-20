// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CheckSquareOutlinedSvg from 'icon-base/es/asn/CheckSquareOutlined';

export interface CheckSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCheckSquareOutlined: CheckSquareOutlinedIconType = (props, context) => (
    <Icon name='CheckSquareOutlined' {...{ ...props, ...context.attrs }} icon={CheckSquareOutlinedSvg} />
);

IconCheckSquareOutlined.displayName = 'IconCheckSquareOutlined';

export default IconCheckSquareOutlined;
