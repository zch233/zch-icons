// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SmallDashOutlinedSvg from 'icons-base/es/asn/SmallDashOutlined';

export interface SmallDashOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSmallDashOutlined: SmallDashOutlinedIconType = (props, context) => (
    <Icon name='SmallDashOutlined' {...{ ...props, ...context.attrs }} icon={SmallDashOutlinedSvg} />
);

IconSmallDashOutlined.displayName = 'IconSmallDashOutlined';
IconSmallDashOutlined.theme = 'outlined';
IconSmallDashOutlined.originName = 'small-dash';

export default IconSmallDashOutlined;
