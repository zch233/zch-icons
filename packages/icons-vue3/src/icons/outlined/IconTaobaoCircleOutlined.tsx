// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TaobaoCircleOutlinedSvg from 'icon-base/es/asn/TaobaoCircleOutlined';

export interface TaobaoCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTaobaoCircleOutlined: TaobaoCircleOutlinedIconType = (props, context) => (
    <Icon name='TaobaoCircleOutlined' {...{ ...props, ...context.attrs }} icon={TaobaoCircleOutlinedSvg} />
);

IconTaobaoCircleOutlined.displayName = 'IconTaobaoCircleOutlined';

export default IconTaobaoCircleOutlined;
