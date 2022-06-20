// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DribbbleSquareOutlinedSvg from 'icon-base/es/asn/DribbbleSquareOutlined';

export interface DribbbleSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDribbbleSquareOutlined: DribbbleSquareOutlinedIconType = (props, context) => (
    <Icon name='DribbbleSquareOutlined' {...{ ...props, ...context.attrs }} icon={DribbbleSquareOutlinedSvg} />
);

IconDribbbleSquareOutlined.displayName = 'IconDribbbleSquareOutlined';

export default IconDribbbleSquareOutlined;
