// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloseSquareFilledSvg from 'icon-base/es/asn/CloseSquareFilled';

export interface CloseSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCloseSquareFilled: CloseSquareFilledIconType = (props, context) => (
    <Icon name='CloseSquareFilled' {...{ ...props, ...context.attrs }} icon={CloseSquareFilledSvg} />
);

IconCloseSquareFilled.displayName = 'IconCloseSquareFilled';

export default IconCloseSquareFilled;
