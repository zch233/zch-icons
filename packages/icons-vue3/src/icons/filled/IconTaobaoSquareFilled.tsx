// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TaobaoSquareFilledSvg from 'icon-base/es/asn/TaobaoSquareFilled';

export interface TaobaoSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTaobaoSquareFilled: TaobaoSquareFilledIconType = (props, context) => (
    <Icon name='TaobaoSquareFilled' {...{ ...props, ...context.attrs }} icon={TaobaoSquareFilledSvg} />
);

IconTaobaoSquareFilled.displayName = 'IconTaobaoSquareFilled';

export default IconTaobaoSquareFilled;
