// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UpOutlinedSvg from 'gupo-icons-base/es/asn/UpOutlined';

export interface UpOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUpOutlined: UpOutlinedIconType = (props, context) => <Icon name='UpOutlined' {...{ ...props, ...context.attrs }} icon={UpOutlinedSvg} />;

IconUpOutlined.displayName = 'IconUpOutlined';
IconUpOutlined.theme = 'outlined';
IconUpOutlined.originName = 'up';

export default IconUpOutlined;
