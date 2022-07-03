// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AlipayCircleFilledSvg from 'icons-base/es/asn/AlipayCircleFilled';

export interface AlipayCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAlipayCircleFilled: AlipayCircleFilledIconType = (props, context) => (
    <Icon name='AlipayCircleFilled' {...{ ...props, ...context.attrs }} icon={AlipayCircleFilledSvg} />
);

IconAlipayCircleFilled.displayName = 'IconAlipayCircleFilled';
IconAlipayCircleFilled.theme = 'filled';
IconAlipayCircleFilled.originName = 'alipay-circle';

export default IconAlipayCircleFilled;
