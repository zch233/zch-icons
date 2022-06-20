// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MinusOutlinedSvg from 'icon-base/es/asn/MinusOutlined';

export interface MinusOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMinusOutlined: MinusOutlinedIconType = (props, context) => <Icon name='MinusOutlined' {...{ ...props, ...context.attrs }} icon={MinusOutlinedSvg} />;

IconMinusOutlined.displayName = 'IconMinusOutlined';

export default IconMinusOutlined;
