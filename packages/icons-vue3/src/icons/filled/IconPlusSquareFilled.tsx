// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlusSquareFilledSvg from 'icon-base/es/asn/PlusSquareFilled';

export interface PlusSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPlusSquareFilled: PlusSquareFilledIconType = (props, context) => (
    <Icon name='PlusSquareFilled' {...{ ...props, ...context.attrs }} icon={PlusSquareFilledSvg} />
);

IconPlusSquareFilled.displayName = 'IconPlusSquareFilled';

export default IconPlusSquareFilled;
