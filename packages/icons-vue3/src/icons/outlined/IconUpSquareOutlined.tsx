// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UpSquareOutlinedSvg from 'gupo-icons-base/es/asn/UpSquareOutlined';

export interface UpSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUpSquareOutlined: UpSquareOutlinedIconType = (props, context) => (
    <Icon name='UpSquareOutlined' {...{ ...props, ...context.attrs }} icon={UpSquareOutlinedSvg} />
);

IconUpSquareOutlined.displayName = 'IconUpSquareOutlined';
IconUpSquareOutlined.theme = 'outlined';
IconUpSquareOutlined.originName = 'up-square';

export default IconUpSquareOutlined;
