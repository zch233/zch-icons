// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MinusSquareOutlinedSvg from 'icon-base/es/asn/MinusSquareOutlined';

export interface MinusSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMinusSquareOutlined: MinusSquareOutlinedIconType = (props, context) => (
    <Icon name='MinusSquareOutlined' {...{ ...props, ...context.attrs }} icon={MinusSquareOutlinedSvg} />
);

IconMinusSquareOutlined.displayName = 'IconMinusSquareOutlined';

export default IconMinusSquareOutlined;
