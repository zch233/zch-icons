// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DribbbleOutlinedSvg from 'icon-base/es/asn/DribbbleOutlined';

export interface DribbbleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDribbbleOutlined: DribbbleOutlinedIconType = (props, context) => (
    <Icon name='DribbbleOutlined' {...{ ...props, ...context.attrs }} icon={DribbbleOutlinedSvg} />
);

IconDribbbleOutlined.displayName = 'IconDribbbleOutlined';

export default IconDribbbleOutlined;
