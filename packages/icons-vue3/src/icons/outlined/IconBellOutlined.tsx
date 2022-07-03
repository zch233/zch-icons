// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BellOutlinedSvg from 'icons-base/es/asn/BellOutlined';

export interface BellOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBellOutlined: BellOutlinedIconType = (props, context) => <Icon name='BellOutlined' {...{ ...props, ...context.attrs }} icon={BellOutlinedSvg} />;

IconBellOutlined.displayName = 'IconBellOutlined';
IconBellOutlined.theme = 'outlined';
IconBellOutlined.originName = 'bell';

export default IconBellOutlined;
