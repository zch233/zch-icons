// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CheckSquareFilledSvg from 'icon-base/es/asn/CheckSquareFilled';

export interface CheckSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCheckSquareFilled: CheckSquareFilledIconType = (props, context) => (
    <Icon name='CheckSquareFilled' {...{ ...props, ...context.attrs }} icon={CheckSquareFilledSvg} />
);

IconCheckSquareFilled.displayName = 'IconCheckSquareFilled';

export default IconCheckSquareFilled;
