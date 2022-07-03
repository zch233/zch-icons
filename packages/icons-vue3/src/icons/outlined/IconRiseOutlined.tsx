// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RiseOutlinedSvg from 'icons-base/es/asn/RiseOutlined';

export interface RiseOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRiseOutlined: RiseOutlinedIconType = (props, context) => <Icon name='RiseOutlined' {...{ ...props, ...context.attrs }} icon={RiseOutlinedSvg} />;

IconRiseOutlined.displayName = 'IconRiseOutlined';
IconRiseOutlined.theme = 'outlined';
IconRiseOutlined.originName = 'rise';

export default IconRiseOutlined;
