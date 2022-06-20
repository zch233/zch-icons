// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LeftSquareFilledSvg from 'icon-base/es/asn/LeftSquareFilled';

export interface LeftSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLeftSquareFilled: LeftSquareFilledIconType = (props, context) => (
    <Icon name='LeftSquareFilled' {...{ ...props, ...context.attrs }} icon={LeftSquareFilledSvg} />
);

IconLeftSquareFilled.displayName = 'IconLeftSquareFilled';

export default IconLeftSquareFilled;
