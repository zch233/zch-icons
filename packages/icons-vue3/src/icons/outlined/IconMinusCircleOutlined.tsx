// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MinusCircleOutlinedSvg from 'icon-base/es/asn/MinusCircleOutlined';

export interface MinusCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMinusCircleOutlined: MinusCircleOutlinedIconType = (props, context) => (
    <Icon name='MinusCircleOutlined' {...{ ...props, ...context.attrs }} icon={MinusCircleOutlinedSvg} />
);

IconMinusCircleOutlined.displayName = 'IconMinusCircleOutlined';

export default IconMinusCircleOutlined;
