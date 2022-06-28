// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TaobaoSquareFilledSvg from 'gupo-icons-base/es/asn/TaobaoSquareFilled';

export interface TaobaoSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTaobaoSquareFilled: TaobaoSquareFilledIconType = (props, context) => (
    <Icon name='TaobaoSquareFilled' {...{ ...props, ...context.attrs }} icon={TaobaoSquareFilledSvg} />
);

IconTaobaoSquareFilled.displayName = 'IconTaobaoSquareFilled';
IconTaobaoSquareFilled.theme = 'filled';
IconTaobaoSquareFilled.originName = 'taobao-square';

export default IconTaobaoSquareFilled;
