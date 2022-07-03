// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LeftSquareOutlinedSvg from 'icons-base/es/asn/LeftSquareOutlined';

export interface LeftSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLeftSquareOutlined: LeftSquareOutlinedIconType = (props, context) => (
    <Icon name='LeftSquareOutlined' {...{ ...props, ...context.attrs }} icon={LeftSquareOutlinedSvg} />
);

IconLeftSquareOutlined.displayName = 'IconLeftSquareOutlined';
IconLeftSquareOutlined.theme = 'outlined';
IconLeftSquareOutlined.originName = 'left-square';

export default IconLeftSquareOutlined;
