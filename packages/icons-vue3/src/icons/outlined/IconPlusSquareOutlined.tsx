// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlusSquareOutlinedSvg from 'icons-base/es/asn/PlusSquareOutlined';

export interface PlusSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPlusSquareOutlined: PlusSquareOutlinedIconType = (props, context) => (
    <Icon name='PlusSquareOutlined' {...{ ...props, ...context.attrs }} icon={PlusSquareOutlinedSvg} />
);

IconPlusSquareOutlined.displayName = 'IconPlusSquareOutlined';
IconPlusSquareOutlined.theme = 'outlined';
IconPlusSquareOutlined.originName = 'plus-square';

export default IconPlusSquareOutlined;
