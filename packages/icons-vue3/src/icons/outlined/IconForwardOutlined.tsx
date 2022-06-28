// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ForwardOutlinedSvg from 'gupo-icons-base/es/asn/ForwardOutlined';

export interface ForwardOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconForwardOutlined: ForwardOutlinedIconType = (props, context) => (
    <Icon name='ForwardOutlined' {...{ ...props, ...context.attrs }} icon={ForwardOutlinedSvg} />
);

IconForwardOutlined.displayName = 'IconForwardOutlined';
IconForwardOutlined.theme = 'outlined';
IconForwardOutlined.originName = 'forward';

export default IconForwardOutlined;
