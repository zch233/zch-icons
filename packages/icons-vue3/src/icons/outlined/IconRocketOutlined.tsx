// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RocketOutlinedSvg from 'icon-base/es/asn/RocketOutlined';

export interface RocketOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRocketOutlined: RocketOutlinedIconType = (props, context) => (
    <Icon name='RocketOutlined' {...{ ...props, ...context.attrs }} icon={RocketOutlinedSvg} />
);

IconRocketOutlined.displayName = 'IconRocketOutlined';

export default IconRocketOutlined;
