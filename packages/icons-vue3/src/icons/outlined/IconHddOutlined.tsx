// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HddOutlinedSvg from 'icon-base/es/asn/HddOutlined';

export interface HddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconHddOutlined: HddOutlinedIconType = (props, context) => <Icon name='HddOutlined' {...{ ...props, ...context.attrs }} icon={HddOutlinedSvg} />;

IconHddOutlined.displayName = 'IconHddOutlined';

export default IconHddOutlined;
