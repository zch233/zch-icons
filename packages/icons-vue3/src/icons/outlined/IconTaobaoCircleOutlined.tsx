// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TaobaoCircleOutlinedSvg from 'icons-base/es/asn/TaobaoCircleOutlined';

export interface TaobaoCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTaobaoCircleOutlined: TaobaoCircleOutlinedIconType = (props, context) => (
    <Icon name='TaobaoCircleOutlined' {...{ ...props, ...context.attrs }} icon={TaobaoCircleOutlinedSvg} />
);

IconTaobaoCircleOutlined.displayName = 'IconTaobaoCircleOutlined';
IconTaobaoCircleOutlined.theme = 'outlined';
IconTaobaoCircleOutlined.originName = 'taobao-circle';

export default IconTaobaoCircleOutlined;
