// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TaobaoCircleFilledSvg from 'icon-base/es/asn/TaobaoCircleFilled';

export interface TaobaoCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTaobaoCircleFilled: TaobaoCircleFilledIconType = (props, context) => (
    <Icon name='TaobaoCircleFilled' {...{ ...props, ...context.attrs }} icon={TaobaoCircleFilledSvg} />
);

IconTaobaoCircleFilled.displayName = 'IconTaobaoCircleFilled';

export default IconTaobaoCircleFilled;
