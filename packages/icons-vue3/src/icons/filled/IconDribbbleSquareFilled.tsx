// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DribbbleSquareFilledSvg from 'icons-base/es/asn/DribbbleSquareFilled';

export interface DribbbleSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDribbbleSquareFilled: DribbbleSquareFilledIconType = (props, context) => (
    <Icon name='DribbbleSquareFilled' {...{ ...props, ...context.attrs }} icon={DribbbleSquareFilledSvg} />
);

IconDribbbleSquareFilled.displayName = 'IconDribbbleSquareFilled';
IconDribbbleSquareFilled.theme = 'filled';
IconDribbbleSquareFilled.originName = 'dribbble-square';

export default IconDribbbleSquareFilled;
