// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DownSquareFilledSvg from 'gupo-icons-base/es/asn/DownSquareFilled';

export interface DownSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDownSquareFilled: DownSquareFilledIconType = (props, context) => (
    <Icon name='DownSquareFilled' {...{ ...props, ...context.attrs }} icon={DownSquareFilledSvg} />
);

IconDownSquareFilled.displayName = 'IconDownSquareFilled';
IconDownSquareFilled.theme = 'filled';
IconDownSquareFilled.originName = 'down-square';

export default IconDownSquareFilled;
