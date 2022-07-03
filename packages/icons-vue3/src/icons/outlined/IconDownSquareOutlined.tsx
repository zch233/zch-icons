// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DownSquareOutlinedSvg from 'icons-base/es/asn/DownSquareOutlined';

export interface DownSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDownSquareOutlined: DownSquareOutlinedIconType = (props, context) => (
    <Icon name='DownSquareOutlined' {...{ ...props, ...context.attrs }} icon={DownSquareOutlinedSvg} />
);

IconDownSquareOutlined.displayName = 'IconDownSquareOutlined';
IconDownSquareOutlined.theme = 'outlined';
IconDownSquareOutlined.originName = 'down-square';

export default IconDownSquareOutlined;
