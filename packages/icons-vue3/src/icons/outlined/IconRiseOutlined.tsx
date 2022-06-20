// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RiseOutlinedSvg from 'icon-base/es/asn/RiseOutlined';

export interface RiseOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRiseOutlined: RiseOutlinedIconType = (props, context) => <Icon name='RiseOutlined' {...{ ...props, ...context.attrs }} icon={RiseOutlinedSvg} />;

IconRiseOutlined.displayName = 'IconRiseOutlined';

export default IconRiseOutlined;
