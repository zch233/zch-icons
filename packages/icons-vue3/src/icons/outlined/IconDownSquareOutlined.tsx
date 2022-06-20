// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DownSquareOutlinedSvg from 'icon-base/es/asn/DownSquareOutlined';

export interface DownSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDownSquareOutlined: DownSquareOutlinedIconType = (props, context) => (
    <Icon name='DownSquareOutlined' {...{ ...props, ...context.attrs }} icon={DownSquareOutlinedSvg} />
);

IconDownSquareOutlined.displayName = 'IconDownSquareOutlined';

export default IconDownSquareOutlined;
