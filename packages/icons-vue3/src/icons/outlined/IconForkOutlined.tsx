// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ForkOutlinedSvg from 'icon-base/es/asn/ForkOutlined';

export interface ForkOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconForkOutlined: ForkOutlinedIconType = (props, context) => <Icon name='ForkOutlined' {...{ ...props, ...context.attrs }} icon={ForkOutlinedSvg} />;

IconForkOutlined.displayName = 'IconForkOutlined';

export default IconForkOutlined;
