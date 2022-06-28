// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlusSquareFilledSvg from 'gupo-icons-base/es/asn/PlusSquareFilled';

export interface PlusSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPlusSquareFilled: PlusSquareFilledIconType = (props, context) => (
    <Icon name='PlusSquareFilled' {...{ ...props, ...context.attrs }} icon={PlusSquareFilledSvg} />
);

IconPlusSquareFilled.displayName = 'IconPlusSquareFilled';
IconPlusSquareFilled.theme = 'filled';
IconPlusSquareFilled.originName = 'plus-square';

export default IconPlusSquareFilled;
