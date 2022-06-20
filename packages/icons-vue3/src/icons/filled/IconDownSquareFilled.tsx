// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DownSquareFilledSvg from 'icon-base/es/asn/DownSquareFilled';

export interface DownSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDownSquareFilled: DownSquareFilledIconType = (props, context) => (
    <Icon name='DownSquareFilled' {...{ ...props, ...context.attrs }} icon={DownSquareFilledSvg} />
);

IconDownSquareFilled.displayName = 'IconDownSquareFilled';

export default IconDownSquareFilled;
