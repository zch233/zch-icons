// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RightSquareOutlinedSvg from 'icon-base/es/asn/RightSquareOutlined';

export interface RightSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRightSquareOutlined: RightSquareOutlinedIconType = (props, context) => (
    <Icon name='RightSquareOutlined' {...{ ...props, ...context.attrs }} icon={RightSquareOutlinedSvg} />
);

IconRightSquareOutlined.displayName = 'IconRightSquareOutlined';

export default IconRightSquareOutlined;
