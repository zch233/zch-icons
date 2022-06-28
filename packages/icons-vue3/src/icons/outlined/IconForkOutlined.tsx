// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ForkOutlinedSvg from 'gupo-icons-base/es/asn/ForkOutlined';

export interface ForkOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconForkOutlined: ForkOutlinedIconType = (props, context) => <Icon name='ForkOutlined' {...{ ...props, ...context.attrs }} icon={ForkOutlinedSvg} />;

IconForkOutlined.displayName = 'IconForkOutlined';
IconForkOutlined.theme = 'outlined';
IconForkOutlined.originName = 'fork';

export default IconForkOutlined;
