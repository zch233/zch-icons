// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TaobaoCircleFilledSvg from 'gupo-icons-base/es/asn/TaobaoCircleFilled';

export interface TaobaoCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTaobaoCircleFilled: TaobaoCircleFilledIconType = (props, context) => (
    <Icon name='TaobaoCircleFilled' {...{ ...props, ...context.attrs }} icon={TaobaoCircleFilledSvg} />
);

IconTaobaoCircleFilled.displayName = 'IconTaobaoCircleFilled';
IconTaobaoCircleFilled.theme = 'filled';
IconTaobaoCircleFilled.originName = 'taobao-circle';

export default IconTaobaoCircleFilled;
