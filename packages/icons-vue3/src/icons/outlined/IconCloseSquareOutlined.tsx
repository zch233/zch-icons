// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloseSquareOutlinedSvg from 'icon-base/es/asn/CloseSquareOutlined';

export interface CloseSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCloseSquareOutlined: CloseSquareOutlinedIconType = (props, context) => (
    <Icon name='CloseSquareOutlined' {...{ ...props, ...context.attrs }} icon={CloseSquareOutlinedSvg} />
);

IconCloseSquareOutlined.displayName = 'IconCloseSquareOutlined';

export default IconCloseSquareOutlined;
