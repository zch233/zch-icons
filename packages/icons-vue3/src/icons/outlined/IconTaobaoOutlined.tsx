// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TaobaoOutlinedSvg from 'icon-base/es/asn/TaobaoOutlined';

export interface TaobaoOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTaobaoOutlined: TaobaoOutlinedIconType = (props, context) => (
    <Icon name='TaobaoOutlined' {...{ ...props, ...context.attrs }} icon={TaobaoOutlinedSvg} />
);

IconTaobaoOutlined.displayName = 'IconTaobaoOutlined';

export default IconTaobaoOutlined;
