// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RightSquareFilledSvg from 'gupo-icons-base/es/asn/RightSquareFilled';

export interface RightSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRightSquareFilled: RightSquareFilledIconType = (props, context) => (
    <Icon name='RightSquareFilled' {...{ ...props, ...context.attrs }} icon={RightSquareFilledSvg} />
);

IconRightSquareFilled.displayName = 'IconRightSquareFilled';
IconRightSquareFilled.theme = 'filled';
IconRightSquareFilled.originName = 'right-square';

export default IconRightSquareFilled;
