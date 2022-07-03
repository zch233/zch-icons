// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FlagOutlinedSvg from 'icons-base/es/asn/FlagOutlined';

export interface FlagOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFlagOutlined: FlagOutlinedIconType = (props, context) => <Icon name='FlagOutlined' {...{ ...props, ...context.attrs }} icon={FlagOutlinedSvg} />;

IconFlagOutlined.displayName = 'IconFlagOutlined';
IconFlagOutlined.theme = 'outlined';
IconFlagOutlined.originName = 'flag';

export default IconFlagOutlined;
