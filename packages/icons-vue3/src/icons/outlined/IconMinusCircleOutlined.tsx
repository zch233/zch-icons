// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MinusCircleOutlinedSvg from 'gupo-icons-base/es/asn/MinusCircleOutlined';

export interface MinusCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMinusCircleOutlined: MinusCircleOutlinedIconType = (props, context) => (
    <Icon name='MinusCircleOutlined' {...{ ...props, ...context.attrs }} icon={MinusCircleOutlinedSvg} />
);

IconMinusCircleOutlined.displayName = 'IconMinusCircleOutlined';
IconMinusCircleOutlined.theme = 'outlined';
IconMinusCircleOutlined.originName = 'minus-circle';

export default IconMinusCircleOutlined;
